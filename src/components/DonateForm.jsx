import React, { useEffect } from 'react';

function DonateForm() {
  useEffect(() => {
    // Create container for Bloomerang form
    const container = document.createElement('div');
    container.id = 'bloomerang-form-iframe-container';
    
    // Find our form container and append the Bloomerang container
    const formContainer = document.getElementById('bloomerang-form');
    if (formContainer) {
      formContainer.appendChild(container);
    }

    // Add Bloomerang script if it doesn't exist
    if (!document.querySelector('script[src="https://s3-us-west-2.amazonaws.com/bloomerang-public-cdn/westboulevardneighborhoodcoalition/.widget-js/563200.js"]')) {
      const script = document.createElement('script');
      script.src = "https://s3-us-west-2.amazonaws.com/bloomerang-public-cdn/westboulevardneighborhoodcoalition/.widget-js/563200.js";
      script.async = true;
      
      // Add the script to the head
      document.head.appendChild(script);

      // Cleanup on unmount
      return () => {
        document.head.removeChild(script);
        if (formContainer && container) {
          formContainer.removeChild(container);
        }
      };
    }
  }, []);

  return (
    <section id="donation-form" className="px-[5%] py-16 md:py-24 lg:py-28 bg-background-secondary/20">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold mb-8 text-center">Make Your Contribution</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div id="bloomerang-form" className="w-full min-h-[600px]">
              {/* Bloomerang form will be injected here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonateForm;