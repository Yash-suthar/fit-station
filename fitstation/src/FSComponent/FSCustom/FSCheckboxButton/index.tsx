import React from 'react';
import {Pressable, Image} from 'react-native';
import AppImages from '../../../FSAssets/FSImages';
import styles from './styles';

interface FSCheckboxButtonProps {
  selected: boolean;
  extraStyle?: any;
  handleClick: (link?: any) => void;
}

const FSCheckboxButton: React.FC<FSCheckboxButtonProps> = ({
  selected,
  extraStyle,
  handleClick,
}) => {
  return (
    <Pressable
      onPress={handleClick}
      style={[styles.pContainer, extraStyle && extraStyle]}>
      {selected && (
        <Image source={AppImages.ic_tick} style={styles.iTick} />
      )}
    </Pressable>
  );
};

export default FSCheckboxButton;
