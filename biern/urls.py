from django.conf import settings
from django.conf.urls.defaults import patterns, include, url
from django.contrib import admin
from django.views.generic.simple import redirect_to, direct_to_template

admin.autodiscover()

# Apps

urlpatterns = patterns('',
    url(r'^$', redirect_to, {'url': '/about/'}),

    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
    url(r'^admin/', include(admin.site.urls)),

    url(r'^blog/', include('articles.urls')),

)

# Static pages

urlpatterns += patterns('',
    url(r'^about/$', direct_to_template, {'template': 'static/about.html'},
        name="about"),
)

# Flatpages

urlpatterns += patterns('django.contrib.flatpages.views',
    # url(r'^about/$', 'flatpage', {'url': '/about/'}, name='about'),
)

# Debug

if settings.DEBUG:
    urlpatterns += (
        url(r'^style_test/', direct_to_template,
            {'template': 'debug/style_test.html'}),
        )
