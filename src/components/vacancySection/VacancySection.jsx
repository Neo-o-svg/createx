import { useState, useRef } from "react";
import VacancyItems from "../vacancyItems/VacancyItems";

export default function VacancySection() {
  const [modalType, setModalType] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const dialogRef = useRef(null);

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  // === Обработчики отправки (preventDefault) ===
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Логика отправки данных...
    alert("Thank you for subscribing!");
    closeModal();
  };

  const handleSendCV = (e) => {
    e.preventDefault();
    // Логика отправки формы с файлом...
    alert("CV successfully sent!");
    closeModal();
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <section className="vacancy-section ">
      <div className="container flex">
        <VacancyItems />
        <div className="dont-find">
          <h3 className="dont-find__title">
            Didn’t find what you were looking for?
          </h3>
          <p className="dont-find__text">
            Send your CV or subscribe to our newsletter to receive information
            about new vacancies.
          </p>

          <div className="dont-find__buttons flex">
            <button
              className="btn outline dont-find__button dont-find__subscribe"
              onClick={() => openModal("subscribe")}
            >
              subscribe
            </button>
            <button
              className="btn orange dont-find__button dont-find__send"
              onClick={() => openModal("send")}
            >
              send cv{" "}
            </button>
          </div>
        </div>
      </div>

      {/* ======= МОДАЛКА ДЛЯ SUBSCRIBE ======= */}
      {modalType === "subscribe" && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          aria-labelledby="subscribeTitle"
          aria-modal="true"
          role="dialog"
        >
          <div
            className="modal-content"
            ref={dialogRef}
            tabIndex="-1"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              aria-label="Close dialog"
              onClick={closeModal}
            ></button>

            <h2 className="modalTitle">Subscribe to our newsletter</h2>

            <form onSubmit={handleSubscribe} className="modal-form">
              <div className="form-group">
                <label htmlFor="subscribeName">Name*</label>
                <input
                  id="subscribeEmail"
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  aria-required="true"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subscribeEmail">Email*</label>
                <input
                  id="subscribeEmail"
                  type="email"
                  name="email"
                  required
                  placeholder="Your working email"
                  aria-required="true"
                />
              </div>
              <button type="submit" className="btn orange">
                send
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ======= МОДАЛКА ДЛЯ SEND CV ======= */}
      {modalType === "send" && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          aria-labelledby="cvTitle"
          aria-modal="true"
          role="dialog"
        >
          <div
            className="modal-content"
            ref={dialogRef}
            tabIndex="-1"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              aria-label="Close dialog"
              onClick={closeModal}
            ></button>

            <h2 className="modalTitle">Send your CV</h2>

            <form onSubmit={handleSendCV} className="modal-form">
              <div className="form-group">
                <label htmlFor="cvName">Name*</label>
                <input
                  id="cvName"
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  aria-required="true"
                />
              </div>

              <div className="form-group">
                <label htmlFor="cvLocation">Location*</label>
                <select
                  name="location"
                  id="location-selector"
                  value={selectedOption}
                  onChange={handleChange}
                  aria-label="location-label"
                  aria-required="true"
                >
                  <option value="">Choose your location</option>
                  <option value="minsk">Minsk</option>
                  <option value="moscow">Moscow</option>
                  <option value="london">London</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="cvPhone">Phone*</label>
                <input
                  id="cvPhone"
                  type="tel"
                  name="tel"
                  required
                  placeholder="Your phone number"
                  aria-required="true"
                />
              </div>

              <div className="form-group">
                <label htmlFor="cvName">Email*</label>
                <input
                  id="cvEmail"
                  type="email"
                  name="email"
                  required
                  placeholder="Your working email"
                  aria-required="true"
                />
              </div>

              <div className="form-group">
                <label htmlFor="cvName">Сovering letter</label>
                <textarea
                  id="cv"
                  type="email"
                  name="email"
                  required
                  placeholder="Your covering letter"
                  aria-required="true"
                ></textarea>
              </div>

              <div className="form-group cv-file flex">
                <input
                  id="cvFile"
                  type="file"
                  name="file"
                  accept=".pdf,.doc,.docx"
                  required
                  aria-required="true"
                />
                <label htmlFor="cvFile">Attach your CV*</label>
              </div>

              <button type="submit" className="btn orange">
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
