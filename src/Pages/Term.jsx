import React, { useState } from 'react';
import Header from '../components/Header';
function TermPage() {

  const terms = {
    en: {
      Header: 'AmharicTypeGame Terms of Service',
      LastUpdate: 'These terms of service were last updated on June 19, 2022.',
      Agreement: 'Agreement',
      AgreementDetail: 'By accessing the AmharicTypeGame website, accessible from amharictypegame.com, you are agreeing to be bound by these Website Terms of Service and agree that you are responsible for compliance with any applicable local laws. IF YOU DO NOT AGREE TO ALL THE TERMS AND CONDITIONS OF THIS AGREEMENT, YOU ARE NOT PERMITTED TO ACCESS OR USE OUR SERVICES.',
      Limitation: 'Limitation',
      LimitationDetail: 'You are responsible for the security of your account and all activities performed using your account. You must not violate any applicable laws while using this site, including but not limited to copyright laws or laws related to the protection of personal data. Misuse of this site is strictly prohibited.',

    },
    am: {
      Header: 'የቃል አሸናፊ ጨዋታ የአገልግሎት ውሎች',
      LastUpdate: 'እነዚህ የአገልግሎት ውሎች ለመጨረሻ ጊዜ የተዘመኑት በሰኔ 12፣ 2023 ነበር።',
      Agreement: 'ስምምነት',
      AgreementDetail: 'ከ amharictypegame.com የሚገኘውን የAmharicTypeGame ድህረ ገጽ በመድረስ በእነዚህ የድረ-ገጽ የአገልግሎት ውሎች ለመገዛት ተስማምተሃል እና ማንኛውንም የሚመለከታቸው የሀገር ውስጥ ህጎችን የማክበር ሃላፊነት እንዳለብህ ተስማምተሃል። በሁሉም የዚህ ስምምነት ውሎች እና ሁኔታዎች ካልተስማሙ፣ አገልግሎቶቻችንን ለማግኘት ወይም ለመጠቀም አልተፈቀደልዎም።',
      Limitation: 'ገደቦች',
      LimitationDetail: 'ለመለያዎ ደህንነት እና መለያዎን ተጠቅመው ለሚከናወኑ ሁሉም እንቅስቃሴዎች ኃላፊነቱን ይወስዳሉ። ይህንን ጣቢያ በሚጠቀሙበት ጊዜ ማንኛውንም የቅጂ መብት ህጎችን ወይም ከግል መረጃ ጥበቃ ጋር የተያያዙ ህጎችን ጨምሮ ማንኛውንም የሚመለከታቸው ህጎች መጣስ የለብዎትም። ይህንን ጣቢያ አላግባብ መጠቀም በጥብቅ የተከለከለ ነው።',

    },
  };
  const [language, setLanguage] = useState('am');

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'en' ? 'am' : 'en'));
  };

  const {
    Header,
    LastUpdate, Agreement, AgreementDetail, Limitation, LimitationDetail
  } = terms[language];


  return (
    <>
      <div className="term-container">
        <div className="beater__Language-control">
          <h4>Amharic</h4>
          <div
            className="beater__Language-control-wrapper"
            onClick={toggleLanguage}
            style={{
              background: language === 'en' ? 'rgba(255, 255, 255, .2)' : 'rgba(153, 218, 0, .2)'
            }}
          >
            <div
              className="beater__Language-control-toggle"
              style={{
                transform: language === 'en' ? 'translateX(0)' : 'translateX(100%)',
                background: language === 'en' ? '#cacaca' : '#edc162'
              }}
            />
          </div>
        </div>
        <div className='term_header' >
          <img src="/logo.svg" alt="Amharic Game Logo" className="term_logo" width={40} height={40} />
          <h1 className="term-header">{Header}</h1>
        </div>
        <p>
          {LastUpdate}
        </p>

        <h2 className="term-subheader">{Agreement}</h2>
        <p>
          {AgreementDetail}
        </p>

        <h2 className="term-subheader">{Limitation}</h2>
        <p>
          {LimitationDetail}      </p>

        <h3 className="term-subheader">Content Upload</h3>
        <p>
          You agree that you will not upload, post, host, or transmit any content that:
          <ul>
            <li>Is unlawful or promotes unlawful activities.</li>
            <li>Is or contains sexually explicit content.</li>
            <li>Is libelous, defamatory, or fraudulent.</li>
            <li>Is discriminatory or abusive toward any individual or group.</li>
            <li>Is degrading to others based on gender, race, ethnicity, religion, sexual preference, orientation, or identity, disability, or other classification.</li>
            <li>Violates any person's right to privacy or publicity.</li>
            <li>Contains or installs any active malware or exploits.</li>
            <li>Infringes on any proprietary rights of any party, including patent, trademark, trade secret, or copyright.</li>
          </ul>
        </p>

        <h3 className="term-subheader">User Conduct</h3>
        <p>
          While using the AmharicTypeGame Services, you agree that you will not:
          <ul>
            <li>Harass, abuse, threaten, or incite violence towards any individual or group, including other users and contributors.</li>
            <li>Use the services for excessive automated bulk activity or unsolicited advertising.</li>
            <li>Attempt to disrupt or tamper with our servers or exceed authorized access.</li>
            <li>Falsely impersonate any person or entity or misrepresent your identity or the site's purpose.</li>
            <li>Violate the privacy of any third party or post personal information without consent.</li>
            <li>Interfere with the operation, appearance, or functionality of the services.</li>
            <li>Use the services in a manner harmful to minors.</li>
          </ul>
        </p>

        <h2 className="term-subheader">Privacy Policy</h2>
        <p>
          If you use our Services, you must abide by our Privacy Policy. You acknowledge that you have read and understand our Privacy Policy, which outlines how we collect, use, and store your information. If you do not agree with our Privacy Policy, you must stop using the Services immediately.
        </p>

        <h2 className="term-subheader">Limitations on Automated Use</h2>
        <p>
          You shouldn't use bots or access our Services in malicious or prohibited ways. While accessing or using the Services, you may not:
          <ul>
            <li>Use bots, hacks, or cheats while using our site.</li>
            <li>Create manual requests to AmharicTypeGame servers.</li>
            <li>Tamper with or use non-public areas of the Services or our computer systems.</li>
            <li>Probe, scan, or test any system or network for vulnerabilities.</li>
            <li>Scrape the Services or use automated means to download data.</li>
            <li>Interfere with or disrupt the access of any user, host, or network.</li>
          </ul>
        </p>

        <p className="term-contact">
          If you have any questions about AmharicTypeGame's terms of service, please contact us at:
          <br />
          Email: girumegizachew@gmail.com
          <br />
          Telegram: YourUsername#1234
        </p>
      </div>
    </>
  );
}

export default TermPage;
