import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

interface FSDateTimePickerProps {
  isVisible: boolean;
  date: Date|undefined;
  maximumDate?: Date;
  minimumdate?: Date;
  onConfirm: (dateTime: Date) => void;
  onCancel: (dateTime?: Date) => void;
}

const FSDateTimePicker: React.FC<FSDateTimePickerProps> = ({
  isVisible,
  date,
  maximumDate,
  minimumdate,
  onCancel,
  onConfirm,
}) => {
  return (
    <DateTimePickerModal
      isVisible={isVisible}
      // display={'spinner'}  //If needed to change Calander type
      mode="date"
      date={date}
      maximumDate={new Date() || maximumDate}
      minimumDate={minimumdate}
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default FSDateTimePicker;
