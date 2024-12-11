<< ---------- Include Prebid JS ---------- >>

<script>
  const adUnits = [
    // InScreen Ad Unit
    {
      code: 'inScreen', // You can replace this with the actual container ID on your site
      mediaTypes: {
        banner: {
          sizes: [[320, 100]]
        }
      },
      bids: [
        {
          bidder: 'seedtag',
          params: {
            publisherId: '5999-0158-01',  // Publisher ID from the client
            adUnitId: '34727025',         // Ad Unit ID for inScreen
            placement: 'inScreen'         // Placement type
          }
        }
      ]
    },

    // InArticle Ad Unit
    {
      code: 'inArticle', // You can replace this with the actual container ID on your site
      mediaTypes: {
        banner: {
          sizes: [[300, 250], [1, 1]] // Define the sizes as needed
        }
      },
      bids: [
        {
          bidder: 'seedtag',
          params: {
            publisherId: '5999-0158-01',  // Publisher ID from the client
            adUnitId: '34727026',         // Ad Unit ID for inArticle
            placement: 'inArticle'        // Placement type
          }
        }
      ]
    },

    // InBanner Ad Unit
    {
      code: 'inBanner', // You can replace this with the actual container ID on your site
      mediaTypes: {
        banner: {
          sizes: [[300, 250]] // Define the sizes as needed
        }
      },
      bids: [
        {
          bidder: 'seedtag',
          params: {
            publisherId: '5999-0158-01',  // Publisher ID from the client
            adUnitId: '34727027',         // Ad Unit ID for inBanner
            placement: 'inBanner'         // Placement type
          }
        }
      ]
    },

    // InStream Ad Unit
    {
      code: 'inStream', // You can replace this with the actual container ID on your site
      mediaTypes: {
        video: {
          context: 'instream',  // Video context type
          playerSize: [640, 360], // Video size
          mimes: ['video/mp4'],   // Supported mime type
          minduration: 5,         // Minimum video duration
          maxduration: 60,        // Maximum video duration
          skip: 1,                // Skip option
          startdelay: 1,          // Start delay
          linearity: 1,           // Linear video
          battr: [1, 2],          // Blocked ad attributes
          maxbitrate: 10,         // Max video bitrate
          playbackmethod: [1],    // Video playback method
          delivery: [1],          // Delivery method
          placement: 1,           // Video placement
        }
      },
      bids: [
        {
          bidder: 'seedtag',
          params: {
            publisherId: '5999-0158-01',  // Publisher ID from the client
            adUnitId: '34727028',         // Ad Unit ID for inStream
            placement: 'inStream'         // Placement type
          }
        }
      ]
    }
  ];

  // Initialize Prebid.js
  var pbjs = pbjs || {};
  pbjs.que = pbjs.que || [];

  pbjs.que.push(function () {
    // Set Prebid configuration to allow all bids, randomize bidder order, and enable TIDs
    pbjs.setConfig({
      enableSendAllBids: true,  // Make sure this is set to allow all bids to be sent
      bidderSequence: 'random', // Randomize bidder order if needed
      enableTIDs: true          // Make sure TIDs (Transaction IDs) are enabled
    });

    // Add the configured ad units
    pbjs.addAdUnits(adUnits);
    
    pbjs.setConfig({
      timeout: 2000, // Set the timeout for bids
      debug: true    // Enable debug mode for troubleshooting
    });

    // Request bids
    pbjs.requestBids({
      bidsBackHandler: function () {
        const winningBids = pbjs.getHighestCpmBids();
        winningBids.forEach(function (bid) {
          const adContainer = document.getElementById(bid.adUnitCode);
          if (adContainer) {
            adContainer.innerHTML = bid.ad;
          }
        });
      }
    });
  });
</script>

<script type="text/javascript">
  // Seedtag ad serving script
  (function() {
    var script = document.createElement('script');
    script.src = "https://t.seedtag.com/t/5999-0158-01.js";  // Seedtag script provided by the client
    script.async = true;
    document.head.appendChild(script);  // Add the script to the document head
  })();
</script>
