import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

export default class App extends React.Component {

  state = {
    inputDeger: '',
    inputDegerArray: [],
  }

  inputDegisti(text) {
    this.setState({ inputDeger: text })
  }

  kaydet() {
    let yeniArray = this.state.inputDegerArray
    yeniArray.push(this.state.inputDeger)

    this.setState({ inputDegerArray: yeniArray })
  }

  render() {
    return (
      <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          style={{ width: 250, height: 50, borderWidth: 1 }}
          value={this.state.inputDeger}
          onChangeText={(text) => this.inputDegisti(text)}
        />
        <Button
          title="Kaydet"
          onPress={() => this.kaydet()}
        />
        {
          this.state.inputDegerArray.map((value, index) => {
            return (<Text key={index}>{value}</Text>)
          })
        }
      </View>
    )
  }
}