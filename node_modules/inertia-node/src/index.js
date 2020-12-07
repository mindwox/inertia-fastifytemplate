module.exports = (html, version = "1") => {
  return (req, res, next) => {
    if (
      req.method === "GET" &&
      req.headers["x-inertia"] &&
      req.headers["x-inertia-version"] !== version
    ) {
      return res.writeHead(409, { "X-Inertia-Location": req.url }).end();
    }

    let _page = {};
    let _viewData = {};
    let _sharedProps = {};
    let _statusCode = 200;
    let _headers = {};

    const Inertia = {
      setViewData(viewData) {
        _viewData = viewData;
        return this;
      },

      shareProps(sharedProps) {
        _sharedProps = { ..._sharedProps, ...sharedProps };
        return this;
      },

      setStatusCode(statusCode) {
        _statusCode = statusCode;
        return this;
      },

      setHeaders(headers) {
        _headers = { ..._headers, ...headers };
        return this;
      },

      async render({ props, ...pageRest }) {
        _page = { ...pageRest, url: req.originalUrl || req.url, version };

        const allProps = { ..._sharedProps, ...props };

        let dataKeys;

        if (
          req.headers["x-inertia-partial-data"] &&
          req.headers["x-inertia-partial-component"] === _page.component
        ) {
          dataKeys = req.headers["x-inertia-partial-data"].split(",");
        } else {
          dataKeys = Object.keys(allProps);
        }

        _page.props = await dataKeys.reduce(async (objPromise, key) => {
          let value;

          if (typeof allProps[key] === "function") {
            value = await allProps[key]();
          } else {
            value = allProps[key];
          }

          const obj = await objPromise;

          return { ...obj, [key]: value };
        }, {});

        if (req.headers["x-inertia"]) {
          res
            .writeHead(_statusCode, {
              ..._headers,
              "Content-Type": "application/json",
              "X-Inertia": "true",
              Vary: "Accept",
            })
            .end(JSON.stringify(_page));
        } else {
          res
            .writeHead(_statusCode, {
              ..._headers,
              "Content-Type": "text/html",
            })
            .end(html(_page, _viewData));
        }
      },

      redirect(url) {
        const statusCode = ["PUT", "PATCH", "DELETE"].includes(req.method)
          ? 303
          : 302;

        res.writeHead(statusCode, { ..._headers, Location: url }).end();
      },
    };

    req.Inertia = Inertia;

    next();
  };
};
