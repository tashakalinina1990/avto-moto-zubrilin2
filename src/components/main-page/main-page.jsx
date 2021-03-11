import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../footer/footer';
import Header from '../header/header';
import OfferInfo from '../offer-info/offer-info';
import Slider from '../slider/slider';
import Tabs from '../tabs/tabs';
import Modal from '../modal/modal';

const MainPage = ({ isModalOpen }) => {
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isModalOpen]);

  return (
    <React.Fragment>
      <Header />
      <div className="content">
        <section className="offer">
          <div className="offer__wrapper">
            <Slider />
            <OfferInfo />
          </div>
        </section>
        <Tabs />
      </div>
      <Footer />
      <Modal isOpen={isModalOpen} />
    </React.Fragment>
  );
};

MainPage.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ isModalOpen }) => {
  return { isModalOpen };
};

export { MainPage };
export default connect(mapStateToProps)(MainPage);
