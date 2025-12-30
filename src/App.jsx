import { motion } from 'framer-motion';
import './index.css';

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="container">
      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Analisis Serangan Siber pada Sistem MOVEit Transfer Tahun 2023
          dan Strategi Mitigasi Keamanan Informasi
        </h1>
        <p className="subtitle">Manajemen Teknologi Informasi</p>

        <motion.div
          className="team-grid"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="team-member" variants={fadeInUp}>
            <h4>Afif Nur Hidayat</h4>
            <p>23523094</p>
          </motion.div>
          <motion.div className="team-member" variants={fadeInUp}>
            <h4>Kinanda Mardhatilla</h4>
            <p>23523036</p>
          </motion.div>
          <motion.div className="team-member" variants={fadeInUp}>
            <h4>Raihan Arhab Kamil Wijanarko</h4>
            <p>23523004</p>
          </motion.div>
          <motion.div className="team-member" variants={fadeInUp}>
            <h4>Syakila Deby Agista</h4>
            <p>23523255</p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Deskripsi Singkat */}
      <motion.section {...fadeInUp}>
        <div className="glass-card">
          <h2>Deskripsi Singkat Kejadian</h2>
          <p>
            Pada Mei–Juni 2023 terjadi serangan siber besar yang mengeksploitasi kerentanan pada aplikasi
            Progress MOVEit Transfer. Kerentanan ini dimanfaatkan oleh kelompok kriminal siber <strong>CL0P</strong> untuk
            mengakses sistem secara ilegal dan mengunduh data sensitif dari banyak organisasi di seluruh dunia.
          </p>
          <div className="highlight-box warning">
            <p>
              <strong>MOVEit Data Breach</strong> menjadi salah satu insiden kebocoran data terbesar pada tahun 2023,
              dengan ribuan organisasi terdampak dan puluhan hingga ratusan juta data individu terpapar.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Analisis Lengkap */}
      <motion.section {...fadeInUp}>
        <div className="glass-card">
          <h2>Analisis Lengkap</h2>

          <h3>Bentuk Serangan yang Terjadi</h3>

          <h4>Vektor Teknis Utama:</h4>
          <p>
            Serangan dilakukan melalui celah keamanan berupa <span className="badge danger">SQL Injection (CVE-2023-34362)</span>
            pada MOVEit Transfer. Celah ini memungkinkan penyerang menjalankan perintah berbahaya, mengunggah web shell,
            serta membaca database dan file yang tersimpan di server Managed File Transfer. Setelah mendapatkan akses,
            penyerang melakukan proses <strong>data exfiltration</strong> dengan mengunduh file dalam jumlah besar.
          </p>

          <h4>Aktor Serangan:</h4>
          <p>
            Serangan ini dikaitkan dengan kelompok kriminal siber <span className="badge">CL0P (Clop)</span>, yang dikenal
            menggunakan metode <strong>double extortion</strong>. Dalam metode ini, penyerang tidak hanya mencuri data,
            tetapi juga mengancam akan mempublikasikan data tersebut jika korban tidak memenuhi tuntutan mereka.
          </p>

          <h4>Rantai Korban (Supply Chain):</h4>
          <p>
            Tidak semua korban merupakan pengguna langsung MOVEit. Banyak organisasi terdampak karena memiliki hubungan
            dengan vendor atau pihak ketiga yang menggunakan MOVEit Transfer, sehingga serangan ini menyebar melalui
            <strong> rantai pasok digital</strong>.
          </p>
        </div>
      </motion.section>

      {/* Dampak/Kerugian */}
      <motion.section {...fadeInUp}>
        <div className="glass-card">
          <h2>Dampak & Kerugian akibat Kejadian</h2>

          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">2,700+</span>
              <span className="stat-label">Organisasi Terdampak</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">90M+</span>
              <span className="stat-label">Data Individu Bocor</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">$B</span>
              <span className="stat-label">Kerugian Ekonomi</span>
            </div>
          </div>

          <h3>Skala Korban:</h3>
          <p>
            Diperkirakan lebih dari <strong>2.000 hingga 2.700 organisasi</strong> terdampak, dengan jumlah individu
            yang datanya bocor mencapai puluhan juta hingga lebih dari <strong>80–90 juta orang</strong>, tergantung
            sumber dan pembaruan laporan. Korban berasal dari berbagai sektor seperti:
          </p>
          <ul>
            <li>Pemerintahan</li>
            <li>Asuransi</li>
            <li>Kesehatan</li>
            <li>Layanan Penggajian</li>
          </ul>

          <h3>Jenis Data yang Bocor:</h3>
          <p>
            Data yang terekspos meliputi:
          </p>
          <div className="highlight-box">
            <ul>
              <li>Data Pribadi (Personally Identifiable Information)</li>
              <li>Nomor Identitas</li>
              <li>Data Payroll</li>
              <li>Rekam Medis</li>
            </ul>
          </div>

          <h3>Kerugian Finansial dan Operasional:</h3>
          <p>
            Organisasi harus menanggung biaya besar untuk respons insiden, pemulihan sistem, kewajiban pelaporan regulasi,
            potensi litigasi, serta kerusakan reputasi. Secara agregat, dampak ekonomi dari insiden ini diperkirakan
            mencapai <strong>miliaran dolar AS</strong>.
          </p>
        </div>
      </motion.section>

      {/* Root Causes */}
      <motion.section {...fadeInUp}>
        <div className="glass-card">
          <h2>Root Causes</h2>

          <div className="highlight-box warning">
            <h4>🔴 Kerentanan Zero-Day</h4>
            <p>
              Adanya celah keamanan pada perangkat lunak pihak ketiga (MOVEit) yang belum ditambal saat pertama kali
              dieksploitasi menjadi penyebab utama serangan ini.
            </p>
          </div>

          <div className="highlight-box warning">
            <h4>🔴 Layanan Terekspos ke Internet</h4>
            <p>
              Banyak server MOVEit dapat diakses secara publik tanpa pembatasan akses jaringan yang memadai, sehingga
              mempermudah penyerang melakukan eksploitasi.
            </p>
          </div>

          <div className="highlight-box warning">
            <h4>🔴 Kurangnya Deteksi dan Visibilitas</h4>
            <p>
              Sistem monitoring dan alerting belum mampu mendeteksi aktivitas mencurigakan seperti akses ilegal dan
              pengunduhan data dalam jumlah besar secara cepat.
            </p>
          </div>

          <div className="highlight-box warning">
            <h4>🔴 Manajemen Vendor yang Lemah</h4>
            <p>
              Kurangnya pengelolaan risiko pihak ketiga menyebabkan organisasi terdampak meskipun tidak menggunakan
              MOVEit secara langsung.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Mitigasi dan Pencegahan */}
      <motion.section {...fadeInUp}>
        <div className="glass-card">
          <h2>Mitigasi dan Pencegahan</h2>

          <h3>Langkah Teknis secara Langsung</h3>
          <div className="highlight-box success">
            <ul>
              <li>Melakukan <strong>patching segera</strong> sesuai rekomendasi vendor setelah advisory keamanan dirilis</li>
              <li>Menerapkan <strong>segmentasi jaringan</strong> untuk memisahkan layanan MFT dari sistem lain</li>
              <li>Menggunakan <strong>Web Application Firewall (WAF)</strong> dan virtual patching untuk memblokir pola serangan</li>
              <li>Menerapkan <strong>autentikasi multi-faktor (MFA)</strong> dan kontrol akses ketat, terutama untuk akun administrator</li>
              <li>Mengaktifkan <strong>monitoring, logging, serta sistem EDR/IDS</strong> untuk mendeteksi anomali dan aktivitas mencurigakan</li>
            </ul>
          </div>

          <h3>Kebijakan dan Proses</h3>
          <div className="highlight-box success">
            <ul>
              <li>Memperkuat <strong>manajemen risiko vendor</strong> dan pihak ketiga, termasuk audit keamanan berkala</li>
              <li>Menyusun dan menguji <strong>incident response plan</strong> untuk skenario kebocoran data</li>
              <li>Menerapkan prinsip <strong>minimisasi data</strong> serta enkripsi data saat disimpan dan dikirim</li>
              <li>Menyediakan sistem <strong>backup yang terisolasi</strong> untuk mendukung proses pemulihan</li>
              <li>Meningkatkan <strong>pelatihan dan kesadaran keamanan</strong> bagi tim internal dan vendor</li>
            </ul>
          </div>

          <h3>Tindakan Keamanan Reguler</h3>
          <div className="highlight-box success">
            <ul>
              <li>Melakukan <strong>vulnerability scanning dan penetration testing</strong> secara berkala</li>
              <li>Melaksanakan <strong>threat hunting</strong> berdasarkan indikator serangan (IOC) dari lembaga resmi seperti CISA</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Daftar Referensi */}
      <motion.section {...fadeInUp}>
        <div className="glass-card">
          <h2>Daftar Referensi</h2>
          <ol className="references-list">
            <li>
              <a
                href="https://www.wired.com/story/moveit-breach-victims/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wired - MOVEit Breach Victims
              </a>
            </li>
            <li>
              <a
                href="https://www.cisa.gov/sites/default/files/2023-06/aa23-158a-stopransomware-cl0p-ransomware-gang-exploits-moveit-vulnerability_5.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                CISA - StopRansomware: CL0P Ransomware Gang Exploits MOVEit Vulnerability
              </a>
            </li>
            <li>
              <a
                href="https://www.akamai.com/blog/security-research/moveit-sqli-zero-day-exploit-clop-ransomware"
                target="_blank"
                rel="noopener noreferrer"
              >
                Akamai - MOVEit SQLi Zero-Day Exploit CLOP Ransomware
              </a>
            </li>
            <li>
              <a
                href="https://www.emsisoft.com/en/blog/44123/unpacking-the-moveit-breach-statistics-and-analysis/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Emsisoft - Unpacking the MOVEit Breach: Statistics and Analysis
              </a>
            </li>
            <li>
              <a
                href="https://community.progress.com/s/article/MOVEit-Transfer-Critical-Vulnerability-31May2023"
                target="_blank"
                rel="noopener noreferrer"
              >
                Progress Community - MOVEit Transfer Critical Vulnerability (31 May 2023)
              </a>
            </li>
          </ol>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        style={{
          textAlign: 'center',
          padding: '3rem 0',
          color: 'var(--text-muted)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          marginTop: '4rem'
        }}
        {...fadeInUp}
      >
        <p>© 2023 - Analisis Keamanan Informasi | Manajemen Teknologi Informasi</p>
      </motion.footer>
    </div>
  );
}

export default App;
