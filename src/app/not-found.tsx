import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found | Cherry Refrigeration",
  description: "The page you were looking for could not be found.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="container-x py-20 max-w-prose mx-auto text-center">
      <div className="text-7xl font-display font-extrabold text-cherry">404</div>
      <h1 className="h2 mt-3">That page is in defrost mode.</h1>
      <p className="lede mt-3">We could not find what you were looking for. Try one of these instead.</p>
      <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center">
        <Link href="/" className="btn-primary">Back to home</Link>
        <Link href="/services/cool-room-installation-brisbane" className="btn-outline">Cool room installation</Link>
        <Link href="/services/cool-room-repairs-brisbane" className="btn-outline">Cool room repairs</Link>
        <Link href="/contact" className="btn-outline">Contact us</Link>
      </div>
    </section>
  );
}
