import React from 'react';
import { View, StyleSheet, Text, Linking } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Drawer,
} from 'react-native-paper'
import { ROUTES } from './routes';
import FSMethod from '../FSUtils/FSMethod';
import { BorderWidth, Icon, Margin, Padding, Sizes } from '../FSUtils/FSDimensions';
import FSConstant from '../FSUtils/FSConst';
import FSString from '../FSUtils/FSString';
import CS from '../FSUtils/FSStyles';
import { Type_Of_DrawerItem } from '../FSUtils/FSEnum';
import FSColors from '../FSUtils/FSColors';


const FSDrawerContent = (props: any) => {
    const { loginStatus, updateLoginStatus } = props

    const handleSignUp = () => {
        if (loginStatus) {
            updateLoginStatus(false)
            FSMethod.logOut(props.navigation)
        } else {
            props.navigation.navigate(ROUTES.Login)
        }

    }

    const handleDrawerItemClick = (index: number) => {
        switch (index) {
            case Type_Of_DrawerItem.Profile:
                props.navigation.navigate(ROUTES.Profile)
                break;
            case Type_Of_DrawerItem.Activity:
                props.navigation.navigate(ROUTES.Activity)
                break;
            case Type_Of_DrawerItem.Settings:
                props.navigation.navigate(ROUTES.Settings)
                break;
            case Type_Of_DrawerItem.Premium:
                break;
            case Type_Of_DrawerItem.RedeemCode:
                props.navigation.navigate(ROUTES.RedeemCode)
                break;
            case Type_Of_DrawerItem.FitStationJumpRopeFacebookCommunity:
                Linking.openURL(FSConstant.fitStationJumpRopeFacebookCommunityLink)
                break;
            case Type_Of_DrawerItem.FollowUs:
                break;
            case Type_Of_DrawerItem.TermsOfUse:
                Linking.openURL(FSConstant.termsOfUseLink)
                break;
            case Type_Of_DrawerItem.PrivacyPolicy:
                Linking.openURL(FSConstant.privacyPolicyLink)
                break;
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.vDrawerContent}>
                    <View style={styles.vUserInfoSection}>
                        <View style={styles.vImageContainer}>
                            <Avatar.Image
                                source={{
                                    uri: FSConstant.imageUrl
                                }}
                                size={Sizes.logo}
                            />
                            <View style={styles.vTitleContainer}>
                                <Title style={[CS.text_light_green_bold, styles.title]}>{FSString.lite}</Title>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>

                        {FSString.drawerItemList.map((drawerList) => {
                            return (
                                <View key={`DrawerList-${drawerList?.index}`}>
                                    <View style={styles.vLineContainer}></View>
                                    <DrawerItem

                                        label={() => <Text style={[CS.text_black_regular, styles.tDrawerItem]}>{drawerList?.label}</Text>}
                                        onPress={() => handleDrawerItemClick(drawerList?.index)}
                                    />
                                    {
                                        drawerList?.label === FSString.followUs &&
                                        <View style={styles.vIconContainer}>
                                            <View style={styles.iCircle}></View>
                                            <View style={styles.iCircle}></View>
                                            <View style={styles.iCircle}></View>
                                        </View>
                                    }
                                </View>
                            )
                        })
                        }
                        <View style={styles.vLineContainer}></View>
                        <DrawerItem
                            label={() => <Text style={[CS.text_black_regular, styles.tDrawerItem]}>{loginStatus ? FSString.signOut : FSString.signIn}</Text>}
                            onPress={() => handleSignUp()}
                        />
                        <Text style={[CS.text_light_white_semibold, styles.tVersion]}>{FSString.version}</Text>
                  
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    vDrawerContent: {
        flex: 1,
    },
    vUserInfoSection: {
        paddingLeft: Margin.default,
    },
    vImageContainer: {
        flexDirection: 'row',
        marginTop: Margin.default
    },
    vTitleContainer: {
        flexDirection: 'column',
        marginLeft: Margin.small,
    },
    title: {
        fontSize: Sizes.text.title,
        marginTop: Margin.small,
    },
    drawerSection: {
        marginTop: Margin.small,
        marginHorizontal: Margin.small,
    },
    tDrawerItem: {
        fontSize: Sizes.text.subtitle,
        textAlign: "left",
    },
    tVersion: {
        fontSize: Sizes.text.subtitle,
        textAlign: "left",
        marginLeft: Margin.default,
        paddingBottom: Margin.small
    },
    vLineContainer: {
        borderBottomWidth: BorderWidth.extraSmall,
        borderColor: FSColors.primary,
        marginHorizontal: Padding.default,
    },
    vIconContainer: {
        flex: 1,
        flexDirection: "row",
        marginHorizontal: Margin.small,
    },
    iCircle: {
        height: Icon.height,
        width: Icon.width,
        backgroundColor: FSColors.iconBackground,
        marginHorizontal: Margin.small,
        borderRadius: Sizes.text.appBarTitle,
        marginBottom: Margin.small
    },

});
export default FSDrawerContent