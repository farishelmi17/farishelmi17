import React from 'react';
import ReportHeader from './ReportHeader.jsx';
import ReportFooter from './ReportFooter.jsx';

const PageOne = () => (
  <div className="page">
    <ReportHeader pageNumber={1} />
    <div className="report-title">
      <span>At the request of: HANAFI KEREMBAT (790220105968)</span>
      <span>MyCTOS SCORE REPORT</span>
    </div>
    <div className="letter-body">
      <p>Tuan / Puan,</p>
      <p>
        Mengikut Akta Agensi Pelaporan Kredit 2010 (APK), CTOS hendaklah memaklumkan anda apabila maklumat anda telah
        dikumpul, disimpan dan diproses. Laporan ini mengandungi maklumat kredit mengenai anda. Sekiranya laporan ini
        diterbitkan tanpa kebenaran anda, sila hubungi kami di talian 03-27225555 atau e-mel: sarus@ctos.com.my.
      </p>
      <p>
        Sebagai agensi pelaporan kredit, CTOS menyimpan maklumat yang diperolehi daripada sumber maklumat yang sah,
        termasuk agensi kerajaan, rakan kongsi data dan sumber komersial. Kami juga menerima maklumat daripada orang ramai
        serta pihak-pihak yang mempunyai hubungan perniagaan dengan anda. Anda bertanggungjawab untuk memastikan maklumat
        kredit yang kami simpan adalah tepat, lengkap, terkini dan tidak mengelirukan. Jika anda ingin mendapatkan salinan
        maklumat kredit anda, sila hubungi kami di talian 03-27225555 atau e-mel: sarus@ctos.com.my.
      </p>
      <p>
        Sekiranya anda ingin menambah atau memperbaharui maklumat anda dalam pangkalan data kami, sila hubungi kami. Anda
        juga berhak untuk membuat aduan kepada kami sekiranya anda mempunyai alasan yang kukuh untuk mempercayai maklumat
        kredit yang kami simpan adalah tidak tepat, tidak lengkap, tidak terkini, mengelirukan atau tidak disokong dengan
        rekod yang munasabah.
      </p>
      <p>Terima kasih.</p>
    </div>
    <div className="signature-block">
      <p className="bold">Dikeluarkan oleh CTOS Data Systems Sdn Bhd.</p>
      <p>Maklumat ini dikeluarkan oleh CTOS daripada sumber-sumber yang sah dan dipercayai.</p>
      <p>Sila rujuk laman web kami di www.ctoscredit.com.my.</p>
    </div>
    <div className="notice mt-2">
      <div className="bold">CTOS Data Systems Sdn Bhd</div>
      <div>
        Unit 7-1, Level 7, Tower 4 @ Level Business Suite, Avenue 3, Bangsar South, No. 8, Jalan Kerinchi, 59200 Kuala Lumpur.
      </div>
      <div>Telefon: 03-2722 5555 &nbsp; Faks: 03-2722 5400 &nbsp; E-mel: sarus@ctos.com.my</div>
    </div>
    <ReportFooter />
  </div>
);

export default PageOne;
