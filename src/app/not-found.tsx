import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x py-20 max-w-prose mx-auto text-center">
      <div className="text-7xl font-display font-extrabold text-cherry">404</div>
      <h1 className="h2 mt-3">That page is in defrost mode.</h1>
      <p className="lede mt-3">We couldn't find what you were looking for. Try one of these instead.</p>
      <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center">
        <Link href="/" className="btn-primary">Back to home</Link>
        <Link href="/services/cold-room-installation-brisbane" className="btn-outline">Cold room installation</Link>
        <Link href="/contact" className="btn-outline">Contact us</Link>
      </div>
    </section>
  );
}
