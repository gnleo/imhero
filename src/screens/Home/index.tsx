import { styles } from "./styles";

import { useState } from "react"

import moment from "moment";
import momentBR from "moment/locale/pt-br"

import { Participant } from "../../components/Participant";
import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";


export function Home(){
  moment.updateLocale('pt-br', momentBR)
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd(){
    if(participants.includes(participantName)){
      setParticipantName('')
      return Alert.alert("Inconsistência!", "Já exite participante com este nome.")
    }

    // setParticipants(previous => [...previous, participantName])
    setParticipants([...participants, participantName])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string){
    Alert.alert("Atenção!", `Remover participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => { 
          setParticipants(participants.filter(participant => participant !== name)); 
          Alert.alert(`${name} removido com sucesso.`)
        }
      },
      {
        text: 'Não',
        // style: 'cancel' // optional
      },
    ])
  }


  return (
    <View style={styles.container}>
      
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      
      <Text style={styles.eventDate}>
        {/* Terça-feira, 14 de novembro de 2023. */}
        { moment().format('dddd[,] DD [de] MMM [de] YYYY') }
        {/* {moment().format('llll')} */}
      </Text>

      <View style={styles.form}>

        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          // onChangeText={eventText => setParticipantName(eventText)}
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={handleParticipantAdd}
          >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>

      </View>

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map((participant, index) => (

            <Participant key={index} name={participant} onRemove={() => {handleParticipantRemove(participant)}}/>
          ))
        }
      </ScrollView> */}

      <FlatList
        data={participants}
        // data={[]}
        keyExtractor={ (item, index ) => `key${index}` }
        renderItem={({item}) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}

        showsVerticalScrollIndicator={false}
        ListEmptyComponent={ () => (
          <Text style={styles.listEmpty}>Ninguém chegou no evento ainda. Adicione um participante.</Text>
        )}
      />


      {/* <Participant name="Sheldon"/>
      <Participant name="Penny"/> */}
    
    </View>
  )
}