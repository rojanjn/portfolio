import { Mail, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind or just want to say hi? Feel
            free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="p-3 rounded-lg bg-secondary h-fit">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg mb-1">Email</h3>
                <a
                  href="mailto:rojanjafarnezhad@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  RojanJafarnezhad@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-3 rounded-lg bg-secondary h-fit">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg mb-1">Location</h3>
                <p className="text-muted-foreground">
                  Toronto, ON
                </p>
              </div>
            </div>
          </div>

          {/* <form
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form> */}
        </div>
      </div>
    </section>
  );
}