import { AnimatePresence, motion } from 'framer-motion';
import { MapPin, X } from 'lucide-react';

const logo01 = '/images/Naati Dosa Logo-01.png';

type OrderPopupProps = {
  onClose: () => void;
  onPickup: () => void;
  selectedMenuItem?: string | null;
  show: boolean;
};

const OrderPopup = ({ onClose, onPickup, selectedMenuItem, show }: OrderPopupProps) => {
  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            className="order-popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="order-popup"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
            >
              <button className="close-popup" onClick={onClose} type="button">
                <X size={24} />
              </button>

              <div className="popup-header">
                <img src={logo01} alt="Naati Dosa Logo" className="popup-logo" />
                <h3>{selectedMenuItem || 'Order Online Now'}</h3>
                <p>Hot, crispy, and authentic South Indian food delivered to your door.</p>
              </div>

              <div className="popup-options">
                <a
                  href="https://www.doordash.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="popup-btn dd centered"
                >
                  <span>Order on DoorDash</span>
                </a>
                <a
                  href="https://www.ubereats.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="popup-btn ue centered"
                >
                  <span>Order on UberEats</span>
                </a>

                <div className="popup-divider">
                  <span>OR</span>
                </div>

                <button onClick={onPickup} className="popup-btn dine" type="button">
                  <MapPin size={24} />
                  <span>Pickup at Truck</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .order-popup-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.7);
            backdrop-filter: blur(8px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            padding: 2rem;
          }
          .order-popup {
            background: linear-gradient(135deg, #FDF6EC 0%, #FFFDF9 100%);
            width: 100%;
            max-width: 440px;
            border-radius: 40px;
            padding: 3.5rem 2.5rem 3rem;
            position: relative;
            text-align: center;
            box-shadow: 0 40px 100px rgba(62,31,8,0.25);
            border: 1px solid rgba(107,58,31,0.08);
          }
          .close-popup {
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(0,0,0,0.05);
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: 0.3s;
            color: var(--brown);
          }
          .close-popup:hover {
            background: var(--brown);
            color: white;
            transform: rotate(90deg);
          }
          .popup-logo {
            height: 90px;
            margin-bottom: 1.5rem;
          }
          .popup-header h3 {
            font-family: var(--font-heading);
            font-size: 1.8rem;
            margin-bottom: 0.8rem;
            color: var(--brown);
          }
          .popup-header p {
            opacity: 0.7;
            margin-bottom: 2rem;
            line-height: 1.4;
            font-size: 0.95rem;
          }
          .popup-options {
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
          }
          .popup-btn {
            display: flex;
            align-items: center;
            padding: 1.2rem 2.5rem;
            border-radius: 20px;
            font-weight: 800;
            font-size: 1.1rem;
            text-decoration: none;
            transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            border: none;
            cursor: pointer;
            font-family: var(--font-heading);
            text-transform: uppercase;
            letter-spacing: 1.5px;
            position: relative;
            overflow: hidden;
          }
          .popup-btn.centered {
            justify-content: center;
            text-align: center;
          }
          .popup-btn.dd {
            background: #FF3008;
            color: white;
            box-shadow: 0 12px 24px rgba(255, 48, 8, 0.25);
          }
          .popup-btn.ue {
            background: #06C167;
            color: white;
            box-shadow: 0 12px 24px rgba(6, 193, 103, 0.25);
          }
          .popup-btn.dine {
            background: white;
            color: var(--brown);
            border: 2px solid var(--brown);
            justify-content: center;
            padding: 1.2rem;
          }
          .popup-btn:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 15px 30px rgba(0,0,0,0.15);
          }
          .popup-btn.dd:hover {
            background: #E22A07;
          }
          .popup-btn.ue:hover {
            background: #05a357;
          }
          .popup-btn.dine:hover {
            background: var(--brown);
            color: white;
          }
          .popup-divider {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            margin: 0.5rem 0;
            opacity: 0.3;
          }
          .popup-divider::before,
          .popup-divider::after {
            content: '';
            flex: 1;
            height: 1px;
            background: currentColor;
          }
          .popup-divider span {
            font-size: 0.8rem;
            font-weight: 900;
            font-family: var(--font-heading);
            color: var(--brown);
          }
          @media (max-width: 768px) {
            .order-popup {
              padding: 2.5rem 1.5rem 2rem;
              max-width: 90%;
              border-radius: 30px;
            }
            .popup-logo {
              height: 75px;
            }
            .popup-header h3 {
              font-size: 1.6rem;
            }
            .popup-btn {
              padding: 1rem 1.5rem;
              font-size: 0.95rem;
            }
          }
        `,
        }}
      />
    </>
  );
};

export default OrderPopup;
