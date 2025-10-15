
export default function EmployeeBenefits() {
  return (
    <section className="our">
        <div className="default-top our-top">
          <div className="container">
            <span className="h2">Employee benefits</span>
            <p>There’s always room for talent.</p>
          </div>
        </div>
      <div className="our__items">
        <div className="container flex">
          <div className="our__item">
            <div className="our__item-img">
              <img src="/img/icons/ic-brain.svg" alt="Training" />
            </div>
            <span className="our__item-header">Training</span>
            <p className="our__item-text">
              Culpa nostrud commodo ea consequat <br /> aliquip reprehenderit.
              Veniam velit <br /> nostrud aliquip sunt.
            </p>
          </div>
          <div className="our__item">
            <div className="our__item-img">
              <img src="/img/icons/ic-success.svg" alt="Professional Growth" />
            </div>
            <span className="our__item-header">Professional Growth</span>
            <p className="our__item-text">
              AAnim reprehenderit sint voluptate <br /> exercitation adipisicing
              laborum <br /> adipisicing. Minim empor est ea.
            </p>
          </div>
          <div className="our__item">
            <div className="our__item-img">
              <img src="/img/icons/ic-budget.svg" alt="Growing Salary" />
            </div>
            <span className="our__item-header">Growing Salary</span>
            <p className="our__item-text">
              Sit veniam aute dolore adipisicing nulla <br /> sit culpa. Minim
              mollit voluptate <br /> ullamco proident ea ad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
