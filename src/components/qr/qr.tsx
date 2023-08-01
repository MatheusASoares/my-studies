import Image from "next/image";

export function QrCode() {
  return (
    <main className="container flex justify-center items-center h-screen gap-1 bg-lightGray">
      <div className="flex flex-col items-center justify-center space-y-5 bg-white rounded-3xl p-3 max-w-xs gap-1">
        <div className="rounded-3xl overflow-hidden">
          <Image
            src="/images/qr/qrcode.png"
            alt="Qr Code"
            width={350}
            height={350}
          />
        </div>
        <div className="flex flex-col justify-center items-center w-auto gap-1">
          <h1 className="text-center text-xl font-bold text-darkBlue">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-center text-grayishBlue">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
}
