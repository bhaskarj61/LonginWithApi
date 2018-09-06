import React, { Component } from 'react';

import { StyleSheet, Text, View, Switch, Alert, Slider } from 'react-native';
import RoundCheckbox from 'rn-round-checkbox';
import { observer,inject} from 'mobx-react';
 @inject('authStore')
 @observer
export default class Settings extends Component {

    constructor(props) {

        super(props);
        this.state = {
            isSwitchOn1: false,
            isSwitchOn2: false,
            check1: false,
            check2: false,
        }
    }

    switchValue1 = () => {
        if (this.state.isSwitchOn1) {
            this.setState({ isSwitchOn1: false })
        } else {
            this.setState({ isSwitchOn1: true })
            this.setState({ isSwitchOn2: false })
        }
    }

    switchValue2 = () => {
        if (this.state.isSwitchOn2) {
            this.setState({ isSwitchOn2: false })
        } else {
            this.setState({ isSwitchOn2: true })
            this.setState({ isSwitchOn1: false })
        }
    }

    render() {

        return (

            <View style={{ backgroundColor: '#446A36', flex: 1 }}>
                <View style={{ height: 60 }}>
                    <Text style={{ fontSize: 30, marginTop: 10 }}>Hello {this.props.authStore.name}</Text>
                </View>
                <View style={styles.ListItem1}>
                    <View >
                        <Text style={{ fontSize: 20, marginTop: 10 }}> Setting 1 </Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Switch
                            onValueChange={this.switchValue1}
                            value={this.state.isSwitchOn1} />
                    </View>
                </View>


                <View style={styles.ListItem1}>
                    <View >
                        <Text style={{ fontSize: 20, marginTop: 10 }}> Setting 2 </Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Switch
                            value={this.state.isSwitchOn2}
                            onValueChange={this.switchValue2} />
                    </View>
                </View>


                <View style={{ height: 40, backgroundColor: '#8b8f93' }}>
                    <Text style={{ margin: 10, color: '#000' }}>Notifications</Text>
                </View>


                <View style={styles.ListItem2}>
                    <View style={{ marginTop: 10 }}>
                        <RoundCheckbox
                            size={24}
                            checked={this.state.isSelected}
                            onValueChange={(newValue) => { Alert.alert('hy') }}
                        />
                    </View>
                    <View>
                        <Text style={{ margin: 10, fontSize: 20, color: '#000' }}>Account Info</Text>
                    </View>
                </View>


                <View style={styles.ListItem2}>
                    <View style={{ marginTop: 10 }}>
                        <RoundCheckbox
                            size={24}
                            checked={this.state.isSelected}
                            onValueChange={(newValue) => { Alert.alert('hy') }}
                        />
                    </View>
                    <View>
                        <Text style={{ margin: 10, fontSize: 20, color: '#000' }}>Newsletter</Text>
                    </View>
                </View>


                <View style={{ height: 40, backgroundColor: '#8b8f93' }}>
                    <Text style={{ margin: 10, color: '#000' }}>Brightness</Text>
                </View>

                <View style={styles.ListItem3}>
                    <Slider style={{ marginTop: 20 }}>

                    </Slider>
                </View>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    ListItem1: {
        height: 50,
        borderColor: 'grey',
        backgroundColor: '#c2c4c6',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 0.5,
    },
    ListItem2: {
        height: 50,
        flexDirection: 'row',
        borderColor: 'grey',
        backgroundColor: '#c2c4c6',
        flexDirection: 'row',
        borderWidth: 0.5,
    },
    ListItem3: {
        height: 50,
        borderColor: 'grey',
        backgroundColor: '#c2c4c6',
        borderWidth: 0.5,
    }


});



