export default function TopBar() {
  return (
    <div className="bg-dark-text text-white py-2">
      <div className="container mx-auto px-4 flex justify-end items-center">
        <p className="text-sm">
          Talk to Sales :{" "}
          <a href="tel:+919575883788" className="font-bold hover:underline">
            +91 9575883788
          </a>
        </p>
      </div>
    </div>
  );
}
