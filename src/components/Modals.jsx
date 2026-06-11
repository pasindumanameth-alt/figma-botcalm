import React, { useState, useEffect } from 'react';

// Rates definitions:
const RATES = {
  ETH: 10000,
  BNB: 1500,
  USDT: 2.5,
};

export function BuyModal({ isOpen, onClose }) {
  const [payToken, setPayToken] = useState('ETH');
  const [payValue, setPayValue] = useState(1.0);
  const [receiveValue, setReceiveValue] = useState(10000);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  // Re-calculate the receiving TVK whenever payment token or amount changes
  useEffect(() => {
    const rate = RATES[payToken] || 1;
    setReceiveValue((payValue * rate).toFixed(2));
  }, [payToken, payValue]);

  const handleSwap = (e) => {
    e.preventDefault();
    if (payValue <= 0) {
      setStatus('Error: Please enter a valid asset amount.');
      return;
    }
    setLoading(true);
    setStatus('Connecting to Web3 Wallet...');
    
    setTimeout(() => {
      setStatus('Broadcasting Temporal Staking Transaction...');
      
      setTimeout(() => {
        setLoading(false);
        setStatus(`Success! Transformed ${payValue} ${payToken} to ${receiveValue} TVK. Tx Hash: 0xChrono...${Math.floor(Math.random() * 9000 + 1000)}`);
      }, 1500);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay open" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">ACQUIRE TVK</h2>
        <p className="modal-desc">Swap your assets for TVK tokens securely.</p>
        
        <form className="swap-interface" onSubmit={handleSwap}>
          <div className="swap-input-group">
            <label>You Pay</label>
            <div className="swap-input-row">
              <input
                type="number"
                value={payValue}
                onChange={(e) => setPayValue(parseFloat(e.target.value) || 0)}
                step="0.01"
                min="0"
                disabled={loading}
              />
              <select
                value={payToken}
                onChange={(e) => setPayToken(e.target.value)}
                disabled={loading}
              >
                <option value="ETH">ETH</option>
                <option value="BNB">BNB</option>
                <option value="USDT">USDT</option>
              </select>
            </div>
          </div>

          <div className="swap-divider">⇓</div>

          <div className="swap-input-group">
            <label>You Receive (Estimated)</label>
            <div className="swap-input-row">
              <input type="text" value={receiveValue} readOnly />
              <span className="swap-token-name">TVK</span>
            </div>
          </div>

          <button type="submit" className="btn btn-swap btn-orange" disabled={loading}>
            {loading ? 'SWAPPING...' : 'SWAP ASSETS'}
          </button>
          
          {status && (
            <div
              className="swap-status"
              style={{
                color: status.includes('Success') ? 'green' : status.includes('Error') ? 'red' : 'var(--dark-accent)',
                marginTop: '15px',
                fontWeight: 'bold',
                wordBreak: 'break-all',
              }}
            >
              {status}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export function JoinModal({ isOpen, onClose }) {
  const [codename, setCodename] = useState('');
  const [email, setEmail] = useState('');
  const [era, setEra] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!codename || !email || !era) {
      setStatus('Error: Please complete all database fields.');
      return;
    }
    setLoading(true);
    setStatus('Decrypting transdimensional link...');

    setTimeout(() => {
      setStatus('Registering Agent coordinates with the Guild...');
      
      setTimeout(() => {
        setLoading(false);
        setStatus(`Agent ${codename.toUpperCase()} Registered! Safe voyage to ${era}. Check your communicator channel.`);
        setCodename('');
        setEmail('');
        setEra('');
      }, 1500);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay open" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">BECOME AN AGENT</h2>
        <p className="modal-desc">Enter your coordinates to receive access to the portal.</p>
        
        <form className="agent-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Agent Codename"
            className="modal-input"
            value={codename}
            onChange={(e) => setCodename(e.target.value)}
            disabled={loading}
            required
          />
          <input
            type="email"
            placeholder="Communication Channel (Email)"
            className="modal-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            required
          />
          <select
            className="modal-input"
            value={era}
            onChange={(e) => setEra(e.target.value)}
            disabled={loading}
            required
          >
            <option value="">Select Your Target Time Period</option>
            <option value="Jurassic Era">Jurassic Era</option>
            <option value="Classical Antiquity">Classical Antiquity</option>
            <option value="The Renaissance">The Renaissance</option>
            <option value="1980s Retro Wave">1980s Retro Wave</option>
            <option value="Current Era (2026)">Current Era (2026)</option>
            <option value="Cyberpunk Future (3026)">Cyberpunk Future (3026)</option>
          </select>
          
          <button type="submit" className="btn btn-swap btn-orange" disabled={loading}>
            {loading ? 'REGISTERING...' : 'REGISTER CODED ACCESS'}
          </button>
          
          {status && (
            <div
              className="agent-status"
              style={{
                color: status.includes('Registered') ? 'green' : status.includes('Error') ? 'red' : 'var(--dark-accent)',
                marginTop: '15px',
                fontWeight: 'bold',
              }}
            >
              {status}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
