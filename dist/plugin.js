var capacitorCapacitorSegment = (function (exports, core) {
    'use strict';

    const CapacitorSegment = core.registerPlugin('CapacitorSegment', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorSegmentWeb()),
    });

    const getSegmentScript = (key) => `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="${key}";analytics.SNIPPET_VERSION="4.13.2";
analytics.load("${key}");
analytics.page();
}}();`;
    class CapacitorSegmentWeb extends core.WebPlugin {
        async initialize(options) {
            await this.loadScript('segment', getSegmentScript(options.key));
        }
        async identify(options) {
            if (!window.analytics)
                return Promise.reject('Segment is not initialized');
            if (!options.userId)
                return Promise.reject("User ID is required for 'identify' but not supplied");
            window.analytics.identify(options.userId, options.traits, options.options);
        }
        async track(options) {
            if (!window.analytics)
                return Promise.reject('Segment is not initialized');
            if (!options.eventName)
                return Promise.reject('Event name is not supplied');
            window.analytics.track(options.eventName, options.properties);
        }
        async page(options) {
            if (!window.analytics)
                return Promise.reject('Segment is not initialized');
            if (!options.pathname)
                return Promise.reject('Pathname was not supplied');
            window.analytics.page(options.pathname);
        }
        async reset() {
            if (!window.analytics)
                return Promise.reject('Segment is not initialized');
            window.analytics.flush();
        }
        /**
         * Loaded single script with provided id and source
         * @param id - unique identifier of the script
         * @param src - source of the script
         */
        loadScript(id, script) {
            return new Promise((resolve) => {
                if (document.getElementById(id)) {
                    resolve(null);
                }
                else {
                    const node = document.createTextNode(script);
                    const file = document.createElement("script");
                    file.type = "text/javascript";
                    file.id = id;
                    file.onload = resolve;
                    file.onerror = console.error;
                    file.appendChild(node);
                    document.head.appendChild(file);
                }
            });
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CapacitorSegmentWeb: CapacitorSegmentWeb
    });

    exports.CapacitorSegment = CapacitorSegment;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
