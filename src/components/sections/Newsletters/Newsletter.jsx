import React from "react";
import { ArrowRight, Youtube, Mail } from "lucide-react";

const FeaturedVideo = () => (
  <div className="relative overflow-hidden rounded-2xl aspect-video bg-gray-100">
    <iframe
      className="absolute inset-0 w-full h-full"
      src="https://www.youtube.com/embed/Q0e6jX8ItGU"
      title="Featured YouTube video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

const ContentHub = () => {
  return (
    <section className="py-24 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            Join the Journey
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay updated with latest insights in physics, tech, and research
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* YouTube Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <Youtube className="w-8 h-8 text-[#ff0000]" />
              <h3 className="text-2xl font-serif">Latest on YouTube</h3>
            </div>

            <FeaturedVideo />

            <div className="space-y-4">
              <p className="text-gray-600">
                Explore video tutorials and discussions on machine learning,
                cosmology, and cutting-edge research methods.
              </p>

              <a
                href="https://youtube.com/@muntazirabidi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#ff0000] font-medium hover:gap-3 transition-all"
              >
                Visit Channel <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:pl-12 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-8 h-8 text-[#553772]" />
              <h3 className="text-2xl font-serif">Weekly Newsletter</h3>
            </div>

            <div className="p-8 rounded-2xl bg-[#f3eef8]">
              <h4 className="text-xl font-serif mb-4">
                Get the Latest Insights
              </h4>

              <p className="text-gray-600 mb-6">
                Join hundreds of researchers and professionals receiving weekly
                updates on AI, machine learning, and quantitative research.
              </p>

              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#553772] focus:border-[#553772] transition-all"
                />

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#553772] hover:bg-[#452c5d] text-white rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  Subscribe to Newsletter
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <p className="text-sm text-gray-500 mt-4">
                Join 100+ subscribers. No spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentHub;
