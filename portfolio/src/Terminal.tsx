import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const TerminalPortfolio: React.FC = () => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState<JSX.Element[]>([]);

  // Use useEffect to automatically display greetings on component mount
  useEffect(() => {
    setOutput([
      <div key="greetings-1" className="text-white">Terminal Portfolio $Ishika - Hello, Welcome To My Site! HeHe!</div>,
      <div key="greetings-2" className="text-green-400 mb-4">
        <pre>{`          $$  $$$$$$    
        $$  $$   $$ 
        $$  $$              
        $$  $$             
        $$  $$   $$       
        $$   $$$$$$

        `}</pre>
      </div>,
      <div key="greetings-3" className="text-white">Greetings! meow, meow..</div>,
      <div key="greetings-4" className="text-green-400">Type 'help' to get help</div>,
      <div key="greetings-5" className="mb-2" />
    ]);
  }, []);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const trimmedCommand = command.trim().toLowerCase();
      switch (trimmedCommand) {
        case 'greetings':
          setOutput([
            <div key="greetings-1" className="text-white">Terminal Portfolio $Ishika - Hello, Welcome To My Site! HeHe!</div>,
            <div key="greetings-2" className="text-green-400 mb-4">
              <pre>{`          $$  $$$$$$    
          $$  $$   $$ 
          $$  $$              
          $$  $$             
          $$  $$   $$       
          $$   $$$$$$`}</pre>
            </div>,
            <div key="greetings-3" className="text-white">Greetings! meow, meow..</div>,
            <div key="greetings-4" className="text-green-400">Type 'help' to get help</div>,
            <div key="greetings-5" className="mb-2" />
          ]);
          break;
        case 'about':
          setOutput([
            <div key="about-1">Ishika Choudhury - Information Technology Student.</div>,
            <div key="about-2">Currently unemployed :(</div>,
            <div key="about-3" className="mb-2" />
          ]);
          break;
        case 'projects':
          setOutput([
            <div key="projects-1">1. SocialT: A token-based decentralized social media platform with NFT marketplace. Recently won Manta Social Fi Track.Made with Smp,the legend! <a href="https://github.com/Rimeeeeee/ethseasocialtoken" className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">GitHub Link</a></div>,
            <div key="projects-2">2. CryptoCover: A decentralized insurance app.Made with Smp,the legend,again!  <a href="https://github.com/Rimeeeeee/HackOnBlocks-Insurance" className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">GitHub Link</a></div>,
            <div key="projects-3">3. Secp256k1: A Rust code that deals with DHKE, ECC implementations, and much more. <a href="https://github.com/Rimeeeeee/secp256k1" className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">GitHub Link</a></div>,
            <div key="projects-4" className="mb-2" />
          ]);
          break;
        case 'skills':
          setOutput([
            <div key="skills-1">Languages: TypeScript, JavaScript, Solidity, Rust</div>,
            <div key="skills-2">Frameworks/Libraries: React, Thirdweb, Ethers.js</div>,
            <div key="skills-3">Tools: Git, Hardhat</div>,
            <div key="skills-4" className="mb-2" />
          ]);
          break;
        case 'contact':
          setOutput([
            <div key="contact-1"><a href="mailto:ishikac720@gmail.com" className="text-white text-decoration-none"><FaEnvelope className="inline mr-1"/> Email me</a></div>,
            <div key="contact-2"><a href="https://github.com/Rimeeeeee" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none"><FaGithub className="inline mr-1"/> Check Out My GitHub!</a></div>,
            <div key="contact-3"><a href="https://linkedin.com/in/ishika-choudhury-b64a68261e" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none"><FaLinkedin className="inline mr-1"/> Connect With Me On LinkedIn</a></div>,
            <div key="contact-4"><a href="https://x.com/e_she_kaa" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">X Follow Me On X!</a></div>,
            <div key="contact-5" className="mb-2" />
          ]);
          break;
        case 'help':
          setOutput([
            <div key="help-1">Available commands:</div>,
            <div key="help-2"><code>about</code> - Show information about me</div>,
            <div key="help-3"><code>projects</code> - List my projects with links</div>,
            <div key="help-4"><code>skills</code> - Display my skills</div>,
            <div key="help-5"><code>contact</code> - Show contact information with links</div>,
            <div key="help-6"><code>clear</code> - Clear the terminal</div>,
            <div key="help-7" className="mb-2" />
          ]);
          break;
        case 'clear':
          setOutput([]);
          break;
        default:
          setOutput([
            <div key="default">I am sorry I don't understand: {command}. But feel free to reach out!</div>,
            <div key="default-2" className="mb-2" />
          ]);
          break;
      }
      setCommand('');
    }
  };

  return (
    <div className="bg-gray-900 text-green-400 font-mono p-6 h-screen text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl">
      <h1 className="text-white text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">Terminal Portfolio $Ishika - Hello, Welcome To My Site! HeHe!</h1>
      <div className="h-5/6 overflow-y-auto mb-4">
        {output}
      </div>
      <div className="flex mt-4">
        <span className="text-white mr-2">$Ishika-</span>
        <input 
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleCommand}
          className="bg-transparent focus:outline-none text-white w-full"
          autoFocus
        />
      </div>
      <p className="mt-2 text-gray-500 text-sm sm:text-base">
        Type `about`, `projects`, `skills`, `contact`, `greetings`, or `help` for assistance
      </p>
    </div>
  );
};

export default TerminalPortfolio;
