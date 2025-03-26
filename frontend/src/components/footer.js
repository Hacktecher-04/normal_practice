export default function Footer() {
  return (
    <footer className="w-full h-24 border-t flex items-center justify-center">
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}
