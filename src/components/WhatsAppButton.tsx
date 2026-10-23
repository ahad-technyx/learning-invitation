import { buildWhatsAppLink } from "@/lib/site-config";

export function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Noor-ul-Quran Academy on WhatsApp"
      className="wa-pulse fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-current"
        aria-hidden="true"
      >
        <path d="M19.11 17.21c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.17-.3.19-.56.07-.26-.13-1.1-.4-2.1-1.29-.78-.69-1.3-1.55-1.45-1.81-.15-.26-.02-.4.11-.53.11-.11.26-.3.39-.44.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.07-.13-.59-1.42-.8-1.94-.21-.51-.43-.44-.59-.45h-.5c-.17 0-.46.07-.7.33-.24.26-.92.9-.92 2.2 0 1.3.95 2.55 1.08 2.73.13.17 1.87 2.86 4.53 4.01.63.27 1.13.43 1.52.55.64.2 1.22.17 1.68.1.51-.08 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.17-.5-.3zM16.02 5.33c-5.9 0-10.7 4.8-10.7 10.7 0 1.88.5 3.72 1.44 5.33L5 27l5.78-1.51a10.65 10.65 0 005.24 1.37h.01c5.9 0 10.7-4.8 10.7-10.7 0-2.86-1.11-5.55-3.13-7.57a10.63 10.63 0 00-7.58-3.26zm0 19.6a8.9 8.9 0 01-4.54-1.24l-.33-.19-3.43.9.92-3.34-.21-.34a8.9 8.9 0 1116.44-4.69c0 4.9-3.99 8.9-8.85 8.9z" />
      </svg>
    </a>
  );
}
