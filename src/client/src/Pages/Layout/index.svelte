<script>
    import { inertia, InertiaLink } from '@inertiajs/inertia-svelte';
    import { count } from '../../store.js';
</script>

<div class="az-sidebar">
    <div class="az-sidebar-header">
        <a href="../template/index.html" class="az-logo">az<span>i</span>a</a>
    </div>
    <!-- az-sidebar-header -->
    <div class="az-sidebar-loggedin">
        <div class="az-img-user online"><img src="https://via.placeholder.com/500" alt=""></div>
        <div class="media-body">
            <h6>Aziana Pechon</h6>
            <span>Premium Member</span>
        </div>
        <!-- media-body -->
    </div>
    <!-- az-sidebar-loggedin -->
    <div class="az-sidebar-body">
        <ul class="nav">
            <li class="nav-label">Main Menu</li>
            <li class="nav-item active">
                <a href class="nav-link with-sub"><i class="typcn typcn-clipboard"></i>Dashboard count: {$count}</a>
                <ul class="nav-sub">
                    <li class="nav-sub-item"><a href="/" use:inertia class="nav-sub-link">Web Analytics</a></li>
                    <li class="nav-sub-item"><a href="/test" use:inertia class="nav-sub-link">Sales Monitoring</a></li>
                    <li class="nav-sub-item"><a href="dashboard-three.html" class="nav-sub-link">Ad Campaign</a></li>
                    <li class="nav-sub-item"><a href="dashboard-four.html" class="nav-sub-link">Event Management</a></li>
                    <li class="nav-sub-item"><a href="dashboard-five.html" class="nav-sub-link">Helpdesk Management</a></li>
                    <li class="nav-sub-item"><a href="dashboard-six.html" class="nav-sub-link">Finance Monitoring</a></li>
                    <li class="nav-sub-item"><a href="dashboard-seven.html" class="nav-sub-link">Cryptocurrency</a></li>
                    <li class="nav-sub-item"><a href="dashboard-eight.html" class="nav-sub-link">Executive / SaaS</a></li>
                    <li class="nav-sub-item"><a href="dashboard-nine.html" class="nav-sub-link">Campaign Monitoring</a></li>
                    <li class="nav-sub-item"><a href="dashboard-ten.html" class="nav-sub-link">Product Management</a></li>
                </ul>
            </li>
            <!-- nav-item -->
            <li class="nav-item">
                <a href class="nav-link with-sub"><i class="typcn typcn-document"></i>Apps &amp; Pages</a>
                <ul class="nav-sub">
                    <li class="nav-sub-item">
                        <a href="app-mail.html" class="nav-sub-link">Mailbox</a>
                    </li>
                    <li class="nav-sub-item">
                        <a href="app-chat.html" class="nav-sub-link">Chat</a>
                    </li>
                    <li class="nav-sub-item">
                        <a href="app-calendar.html" class="nav-sub-link">Calendar</a>
                    </li>
                    <li class="nav-sub-item">
                        <a href="app-contacts.html" class="nav-sub-link">Contacts</a>
                    </li>
                    <li class="nav-sub-item"><a href="page-profile.html" class="nav-sub-link">Profile</a></li>
                    <li class="nav-sub-item"><a href="page-invoice.html" class="nav-sub-link">Invoice</a></li>
                    <li class="nav-sub-item"><a href="page-signin.html" class="nav-sub-link">Sign In</a></li>
                    <li class="nav-sub-item"><a href="page-signup.html" class="nav-sub-link">Sign Up</a></li>
                    <li class="nav-sub-item"><a href="page-404.html" class="nav-sub-link">Page 404</a></li>
                </ul>
            </li>
            <!-- nav-item -->
            <li class="nav-item">
                <a href class="nav-link with-sub"><i class="typcn typcn-book"></i>UI Elements</a>
                <ul class="nav-sub">
                    <li class="nav-sub-item"><a href="elem-accordion.html" class="nav-sub-link">Accordion</a></li>
                    <li class="nav-sub-item"><a href="elem-alerts.html" class="nav-sub-link">Alerts</a></li>
                    <li class="nav-sub-item"><a href="elem-avatar.html" class="nav-sub-link">Avatar</a></li>
                    <li class="nav-sub-item"><a href="elem-badge.html" class="nav-sub-link">Badge</a></li>
                    <li class="nav-sub-item"><a href="elem-breadcrumbs.html" class="nav-sub-link">Breadcrumbs</a></li>
                    <li class="nav-sub-item"><a href="elem-buttons.html" class="nav-sub-link">Buttons</a></li>
                    <li class="nav-sub-item"><a href="elem-cards.html" class="nav-sub-link">Cards</a></li>
                    <li class="nav-sub-item"><a href="elem-carousel.html" class="nav-sub-link">Carousel</a></li>
                    <li class="nav-sub-item"><a href="elem-collapse.html" class="nav-sub-link">Collapse</a></li>
                    <li class="nav-sub-item"><a href="elem-dropdown.html" class="nav-sub-link">Dropdown</a></li>
                    <li class="nav-sub-item"><a href="elem-icons.html" class="nav-sub-link">Icons</a></li>
                    <li class="nav-sub-item"><a href="elem-images.html" class="nav-sub-link">Images</a></li>
                    <li class="nav-sub-item"><a href="elem-list-group.html" class="nav-sub-link">List Group</a></li>
                    <li class="nav-sub-item"><a href="elem-media-object.html" class="nav-sub-link">Media Object</a></li>
                    <li class="nav-sub-item"><a href="elem-modals.html" class="nav-sub-link">Modals</a></li>
                    <li class="nav-sub-item"><a href="elem-navigation.html" class="nav-sub-link">Navigation</a></li>
                    <li class="nav-sub-item"><a href="elem-pagination.html" class="nav-sub-link">Pagination</a></li>
                    <li class="nav-sub-item"><a href="elem-popover.html" class="nav-sub-link">Popover</a></li>
                    <li class="nav-sub-item"><a href="elem-progress.html" class="nav-sub-link">Progress</a></li>
                    <li class="nav-sub-item"><a href="elem-spinners.html" class="nav-sub-link">Spinners</a></li>
                    <li class="nav-sub-item"><a href="elem-toast.html" class="nav-sub-link">Toast</a></li>
                    <li class="nav-sub-item"><a href="elem-tooltip.html" class="nav-sub-link">Tooltip</a></li>
                </ul>
            </li>
            <!-- nav-item -->
            <li class="nav-item">
                <a href class="nav-link with-sub"><i class="typcn typcn-edit"></i>Forms</a>
                <ul class="nav-sub">
                    <li class="nav-sub-item"><a href="form-elements.html" class="nav-sub-link">Form Elements</a></li>
                    <li class="nav-sub-item"><a href="form-layouts.html" class="nav-sub-link">Form Layouts</a></li>
                    <li class="nav-sub-item"><a href="form-validation.html" class="nav-sub-link">Form Validation</a></li>
                    <li class="nav-sub-item"><a href="form-wizards.html" class="nav-sub-link">Form Wizards</a></li>
                    <li class="nav-sub-item"><a href="form-editor.html" class="nav-sub-link">WYSIWYG Editor</a></li>
                </ul>
            </li>
            <!-- nav-item -->
            <li class="nav-item">
                <a href class="nav-link with-sub"><i class="typcn typcn-chart-bar-outline"></i>Charts</a>
                <ul class="nav-sub">
                    <li class="nav-sub-item"><a href="chart-morris.html" class="nav-sub-link">Morris Charts</a></li>
                    <li class="nav-sub-item"><a href="chart-flot.html" class="nav-sub-link">Flot Charts</a></li>
                    <li class="nav-sub-item"><a href="chart-chartjs.html" class="nav-sub-link">ChartJS</a></li>
                    <li class="nav-sub-item"><a href="chart-sparkline.html" class="nav-sub-link">Sparkline</a></li>
                    <li class="nav-sub-item"><a href="chart-peity.html" class="nav-sub-link">Peity</a></li>
                </ul>
            </li>
            <!-- nav-item -->
            <li class="nav-item">
                <a href class="nav-link with-sub"><i class="typcn typcn-map"></i>Maps</a>
                <ul class="nav-sub">
                    <li class="nav-sub-item"><a href="map-google.html" class="nav-sub-link">Google Maps</a></li>
                    <li class="nav-sub-item"><a href="map-leaflet.html" class="nav-sub-link">Leaflet</a></li>
                    <li class="nav-sub-item"><a href="map-vector.html" class="nav-sub-link">Vector Maps</a></li>
                </ul>
            </li>
            <!-- nav-item -->
            <li class="nav-item">
                <a href class="nav-link with-sub"><i class="typcn typcn-tabs-outline"></i>Tables</a>
                <ul class="nav-sub">
                    <li class="nav-sub-item"><a href="table-basic.html" class="nav-sub-link">Basic Tables</a></li>
                    <li class="nav-sub-item"><a href="table-data.html" class="nav-sub-link">Data Tables</a></li>
                </ul>
            </li>
            <!-- nav-item -->
            <li class="nav-item">
                <a href class="nav-link with-sub"><i class="typcn typcn-archive"></i>Utilities</a>
                <ul class="nav-sub">
                    <li class="nav-sub-item"><a href="util-background.html" class="nav-sub-link">Background</a></li>
                    <li class="nav-sub-item"><a href="util-border.html" class="nav-sub-link">Border</a></li>
                    <li class="nav-sub-item"><a href="util-display.html" class="nav-sub-link">Display</a></li>
                    <li class="nav-sub-item"><a href="util-flex.html" class="nav-sub-link">Flex</a></li>
                    <li class="nav-sub-item"><a href="util-height.html" class="nav-sub-link">Height</a></li>
                    <li class="nav-sub-item"><a href="util-margin.html" class="nav-sub-link">Margin</a></li>
                    <li class="nav-sub-item"><a href="util-padding.html" class="nav-sub-link">Padding</a></li>
                    <li class="nav-sub-item"><a href="util-position.html" class="nav-sub-link">Position</a></li>
                    <li class="nav-sub-item"><a href="util-typography.html" class="nav-sub-link">Typography</a></li>
                    <li class="nav-sub-item"><a href="util-width.html" class="nav-sub-link">Width</a></li>
                    <li class="nav-sub-item"><a href="util-extras.html" class="nav-sub-link">Extras</a></li>
                </ul>
            </li>
            <!-- nav-item -->
        </ul>
        <!-- nav -->
    </div>
    <!-- az-sidebar-body -->
</div>
<slot />