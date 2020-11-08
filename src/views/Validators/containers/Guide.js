// @flow
import React, { Fragment } from 'react';

// Components
import Modal from 'components/Modal';
import Determine from '../components/Determine';

// Ducks
import { VALIDATOR_GUIDE_MODAL_ID } from '../ducks';

// Styles
import step1 from 'assets/guide/step-1.png';
import step2 from 'assets/guide/step-2.png';
import styles from './Guide.scss';

const ValidatorsGuide: React.Element<Modal> = () => (
  <Modal
    classNames={{ container: styles.Container }}
    id={VALIDATOR_GUIDE_MODAL_ID}
    title="Инструкция по работе с Metamask"
  >
    {({ sectionId }): Function => (
      <Fragment>
        <Determine
          isSelected={sectionId === 1}
          title="1. Установка Metamask"
        >
          Для авторизации в сети Etherus вам необходим Metamask.
          Это расширение для браузера и скачать его можно по адресу: 
          <a
            className={styles.Link}
            href="https://metamask.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://metamask.io
          </a>
        </Determine>

        <Determine
          isSelected={sectionId === 2}
          title="2. Создайте/импортируйте ваш кошелёк"
        >
          Используя интерфейс Metamask создайте новый или импортируйте существующий кошелёк.
          Более подробную информацию Вы можете получить, посмотрев обучающий ролик:

          <div className={styles.Frame}>
            <iframe
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              height="340"
              src="https://www.youtube.com/embed/ZIGUC9JAAw8"
              title="Tutorial video"
              width="632"
            />
          </div>

        </Determine>

        <Determine
          isSelected={sectionId === 3}
          title="3. Подключите Metamask к сети Etherus"
        >
          Открыв Metamask, нажмите на вкладку с доступными сетями и выберите «Пользовательский RPC».
          После чего в разделе New Network введите данные для подключения:

          <div className={styles.Steps}>
            <img
              alt="Шаг №1"
              src={step1}
            />

            <img
              alt="Шаг №2"
              src={step2}
            />
          </div>

        </Determine>

        <Determine title="Данные для подключения">
          <strong>RPC URL</strong>: https://rpc.etherus.org; <br/>
          <strong>ChainID</strong>: 0x7d13; <br/>
          <strong>Symbol</strong>: ETR; <br/>
          <strong>Nickname</strong>: Etherus Mainnet.
        </Determine>
      </Fragment>
    )}
  </Modal>
);

export default ValidatorsGuide;
