import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import api from './../../services/api';
import {Detalhes} from './Detalhes';

export function Filmes({data}) {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{data.nome}</Text>
        <Image source={{uri: data.foto}} style={styles.capa} />

        <View style={styles.areaBotao}>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => {
              setVisible(true);
            }}>
            <Text style={styles.botaoTexto}>Leia Mais</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal transparent={true} animationType="slide" visible={visible}>
        <Detalhes filme={data} voltar={() => setVisible(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 15,
    elevation: 2,
  },
  capa: {
    height: 250,
    zIndex: 2,
  },
  title: {
    padding: 15,
    fontSize: 18,
  },
  areaBotao: {
    alignItems: 'flex-end',
    marginTop: -45,
    zIndex: 3,
  },
  botao: {
    width: 100,
    backgroundColor: '#09a6ff',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  botaoTexto: {
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
