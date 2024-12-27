import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import globalStyles from '@globalStyles';
import Images from 'src/assets/images';
import Strings from 'src/shared/constant/strings';
import {ActiveOpacity_0_8, ActiveOpacity_1} from 'src/utils';
import styles from './styles';
import Colors from '@colors';

const HandleView = ({children}: any) => {
  return <View style={globalStyles.rowCenter}>{children}</View>;
};

interface HandleBackProps {
  backOnPress?: () => void;
  addUserOnPress?: () => void;
  downloadOnPress?: () => void;
  infoOnPress?: () => void;
  deleteOnPress?: () => void;
  editOnPress?: () => void;
  isDelete?: boolean;
  isDeleteMore?: boolean;
  isInfo?: boolean;
}

const HandleBack = ({
  backOnPress,
  addUserOnPress,
  downloadOnPress,
  infoOnPress,
  deleteOnPress,
  editOnPress,
  isDelete,
  isDeleteMore,
  isInfo,
}: HandleBackProps) => {
  return (
    <HandleView>
      <TouchableOpacity onPress={backOnPress} activeOpacity={ActiveOpacity_1}>
        <Images.svg.LeftBackArrow />
      </TouchableOpacity>

      <View style={styles.view}>
        {isInfo ? null : isDelete ? (
          <TouchableOpacity
            activeOpacity={ActiveOpacity_0_8}
            onPress={deleteOnPress}
            style={styles.marginRight15}>
            <Images.svg.DeleteIcon />
          </TouchableOpacity>
        ) : (
          <>
            {isDeleteMore ? (
              <TouchableOpacity
                activeOpacity={ActiveOpacity_0_8}
                onPress={deleteOnPress}
                style={styles.marginRight15}>
                <Images.svg.DeleteIcon />
              </TouchableOpacity>
            ) : null}
            {/* sir ae kidhu hatu comment maravanu  */}
            {/* <TouchableOpacity
              activeOpacity={ActiveOpacity_0_8}
              onPress={editOnPress}
              style={styles.marginRight15}>
              <Images.svg.EditPencil fill={Colors.black} />
            </TouchableOpacity> */}

            {/* <TouchableOpacity
              activeOpacity={ActiveOpacity_0_8}
              onPress={addUserOnPress}
              style={styles.marginRight15}
              >
              <Images.svg.AddUser />
            </TouchableOpacity> */}

            {/* <TouchableOpacity
              activeOpacity={ActiveOpacity_0_8}
              onPress={downloadOnPress}
              style={styles.marginHorizontal15}>
              <Images.svg.Download />
            </TouchableOpacity> */}
          </>
        )}

        <TouchableOpacity
          activeOpacity={ActiveOpacity_0_8}
          onPress={infoOnPress}>
          <Images.svg.InfoInactive />
        </TouchableOpacity>
      </View>
    </HandleView>
  );
};

interface WriteHeaderProps {
  onPress?: () => void;
  filterOnPress?: () => void;
  infoOnPress?: () => void;
  addUserOnPress?: () => void;
  downloadOnPress?: () => void;
  deleteOnPress?: () => void;
  editOnPress?: () => void;
  type: 'addMessage' | 'back' | 'backDelete' | 'backInfo';
  title?: string;
}

const WriteHeader = ({
  onPress,
  type = 'addMessage',
  filterOnPress,
  infoOnPress,
  addUserOnPress,
  downloadOnPress,
  deleteOnPress,
  editOnPress,
  title,
}: WriteHeaderProps) => {
  const renderContent = () => {
    switch (type) {
      case 'addMessage':
        return (
          <HandleView>
            <TouchableOpacity
              onPress={onPress}
              style={globalStyles.rowCenter}
              activeOpacity={ActiveOpacity_1}>
              <Images.svg.CirclePlus />
              <Text style={[globalStyles.caption_14_500, styles.text]}>
                {title}
              </Text>
            </TouchableOpacity>
            <View style={styles.view}>
              <TouchableOpacity
                activeOpacity={ActiveOpacity_0_8}
                onPress={filterOnPress}>
                <Images.svg.Filter />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={ActiveOpacity_0_8}
                style={styles.marginLeft15}
                onPress={infoOnPress}>
                <Images.svg.InfoInactive />
              </TouchableOpacity>
            </View>
          </HandleView>
        );

      case 'back':
        return (
          <HandleBack
            isDeleteMore
            backOnPress={onPress}
            addUserOnPress={addUserOnPress}
            // downloadOnPress={downloadOnPress}
            infoOnPress={infoOnPress}
            editOnPress={editOnPress}
            deleteOnPress={deleteOnPress}
          />
        );

      case 'backInfo':
        return (
          <HandleBack isInfo backOnPress={onPress} infoOnPress={infoOnPress} />
        );

      case 'backDelete':
        return (
          <HandleBack
            isDelete
            backOnPress={onPress}
            infoOnPress={infoOnPress}
            deleteOnPress={deleteOnPress}
            addUserOnPress={addUserOnPress}
          />
        );

      default:
        return null;
    }
  };

  return (
    <View style={[globalStyles.rowCenter, styles.headerView]}>
      {renderContent()}
    </View>
  );
};

export default WriteHeader;
