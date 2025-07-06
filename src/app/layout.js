import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Beauty Academy - Become a Certified Beauty Professional",
  description: "Transform your passion for beauty into a successful career with our professional beauty courses and certification programs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}>
        <nav className="sticky top-0 z-50 bg-[#242426] backdrop-blur-sm shadow-sm">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <Image
                  src="/icon/1.png"
                  alt="icon"
                  width={100}
                  height={100}
                  className="w-full max-w-[100px] h-full max-h-[100px]"
                />
              </div>

              <a
                href="https://wa.me/919915120010"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed right-8 bottom-5 z-50 flex items-center bg-gradient-to-r from-[#25D366] to-[#25D366] text-white px-4 py-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A11.9 11.9 0 0 0 12.04 0 11.91 11.91 0 0 0 0 11.91c0 2.1.56 4.15 1.61 5.96L0 24l6.3-1.65a11.94 11.94 0 0 0 5.74 1.46h.01a11.91 11.91 0 0 0 11.91-11.91 11.88 11.88 0 0 0-3.44-8.42zM12.04 22.2h-.01a10.15 10.15 0 0 1-5.19-1.43l-.37-.22-3.74.98.99-3.65-.24-.38A10.12 10.12 0 0 1 1.8 11.9c0-5.64 4.59-10.23 10.24-10.23 2.73 0 5.29 1.06 7.22 2.99a10.15 10.15 0 0 1 2.98 7.23c0 5.64-4.59 10.23-10.2 10.23zm5.83-7.59c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15s-.76.97-.93 1.17c-.17.2-.34.22-.63.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.66-1.59-.91-2.19-.24-.58-.49-.5-.66-.51h-.56c-.2 0-.52.07-.79.35s-1.04 1.02-1.04 2.48 1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.1 4.48.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.21-.56-.36z" />
                </svg>
            
              </a>


            </div>
          </div>
        </nav>



        {children}
        <footer className="bg-gradient-to-r from-[#DFBE69] to-[#CEAB45] border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Image
                  src="/icon/black-icon.png"
                  alt="icon"
                  width={100}
                  height={100}
                  className="w-full max-w-[125px] h-full max-h-[100px]"
                />
                <p className="text-white mt-2">The Rediance Beauty</p>
              </div>
              {/* <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white">About Us</a></li>
                  <li><a href="#" className="text-white">Our Courses</a></li>
                  <li><a href="#" className="text-white">Testimonials</a></li>
                  <li><a href="#" className="text-white">Contact</a></li>
                </ul>
              </div> */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-4">Contact Info</h4>
                <ul className="space-y-2 text-white">
                  <li>Jandiali, Opposite Akal Academy</li>
                  <li>Bhudewal Road, near Kohara Chowk</li>
                  <li>Chandigarh Road, Ludhiana - 141112</li>
                  <li>glowziaindia@gmail.com</li>
                  <li>Mo: +91 99151-20010</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/share/1CyYCmi6Yp" className="text-white">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/glowzialudhiana?igsh=MXVhYzVmdmFldWdjeg%3D%3D&utm_source=qr" className="text-white">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  </a>
                  <a href="https://youtube.com/@glowzialudhiana?si=5nLpP6gC8LsiT8pE" className="text-white">
                    <span className="sr-only">YouTube</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 576 512">
                      <path d="M549.655 124.083c-6.281-23.65-24.764-42.232-48.369-48.524C460.801 64 288 64 288 64s-172.801 0-213.286 11.559c-23.605 6.292-42.088 24.874-48.369 48.524C16 166.042 16 256.001 16 256.001s0 89.959 10.345 131.918c6.281 23.65 24.764 42.232 48.369 48.524C115.199 448.001 288 448.001 288 448.001s172.801 0 213.286-11.558c23.605-6.292 42.088-24.874 48.369-48.524C560 345.96 560 256.001 560 256.001s0-89.959-10.345-131.918zM232 336.001V176.001l142.857 80z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-blackS text-base">
                © {new Date().getFullYear()} Glowzia Beauty Academy. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
