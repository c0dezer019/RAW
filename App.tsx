import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, SectionList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 50,
    },
    header: {
        fontSize: 32,
        textAlign: 'center',
    },
    item: {
        elevation: 2,
        padding: 20,
        marginVertical: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1, },
        shadowRadius: 1.41,
        width: '100%',
    },
    info: {
        fontSize: 12,
    },
    title: {
        fontSize: 24,
    },
    list: {
        width: '100%',
        padding: 20,
    }
});

const DATA: Array<object> = [
    {
        title: 'New Titles',
        data: ['Hot Dog'],
    },
];

const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
)

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
          <SectionList
              sections={DATA}
              keyExtractor={(item, index) => item + index}
              renderItem={({item}) => <Item title={item}/>}
              renderSectionHeader={({section: {title}}) => <Text style={styles.header}>{title} </Text>}
              style={styles.list}
          />
        <StatusBar style="auto"/>
      </SafeAreaView>
    );
};

export default App;
