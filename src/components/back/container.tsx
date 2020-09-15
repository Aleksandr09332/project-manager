import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'rsuite';
import { switchScreen } from '../../store/navigation/actions';
import { NavActionTypes, NameScreen } from '../../store/navigation/types';

interface IButtonBack {
  onSwitchScreen: (screen: NameScreen) => NavActionTypes,
}

const ButtonBack = function createButtonBackContainer(props: any) {
  const { onSwitchScreen } = props as IButtonBack;

  return (
    <Button onClick={() => onSwitchScreen(NameScreen.Main)}>Назад</Button>
  );
};

const mapDispatchToProps = {
  onSwitchScreen: switchScreen,
};

export default connect(() => ({}), mapDispatchToProps)(ButtonBack);
