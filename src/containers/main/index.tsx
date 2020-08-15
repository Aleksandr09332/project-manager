import React from 'react';
import { connect } from 'react-redux';
import { toggleLang } from '../../store/language/actions';
import { LangEnums } from '../../store/language/types';

const Main = function createMain(props: any) {
  const { lang, onToggleLang } = props;

  return (
    <div>
      <h1>
        Привет
      </h1>
      <div>
        {lang === 'ru'
          ? <button type="button" onClick={() => onToggleLang(LangEnums.En)}>EN</button>
          : <button type="button" onClick={() => onToggleLang(LangEnums.Ru)}>RU</button> }
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  lang: state.langReducer,
});

const mapDispatchToProps = (dispatch: any) => ({
  onToggleLang: (lang: string) => dispatch(toggleLang(lang)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
