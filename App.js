import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  const [status, setStatus] = useState('Ready');
  const [inputText, setInputText] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    const userMsg = inputText;
    setChatLog((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setInputText('');
    setStatus('Thinking...');

    setTimeout(() => {
      let reply = "আমি রোকি, আপনার সাথেই আছি! " + userMsg;
      setChatLog((prev) => [...prev, { sender: 'roki', text: reply }]);
      setStatus('Ready');
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0a0f12" />
      <View style={styles.header}>
        <Text style={styles.title}>ROKI AI</Text>
        <Text style={styles.subtitle}>Voice Assistant</Text>
      </View>

      <View style={styles.centerContainer}>
        <View style={styles.orbOuter}>
          <View style={styles.orbInner} />
        </View>
        <Text style={styles.statusText}>● {status}</Text>
        <Text style={styles.hintText}>Tap the mic below or type to speak.</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a command..."
          placeholderTextColor="#666"
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
          <Text style={styles.sendBtnText}>↑</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.micBtn}>
          <Text style={styles.micIcon}>🎙️</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0f12' },
  header: { alignItems: 'center', marginTop: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff', letterSpacing: 3 },
  subtitle: { fontSize: 12, color: '#00d2ff', letterSpacing: 1 },
  centerContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  orbOuter: { width: 220, height: 220, borderRadius: 110, borderWidth: 2, borderColor: '#005f73', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  orbInner: { width: 140, height: 140, borderRadius: 70, backgroundColor: '#00d2ff' },
  statusText: { color: '#ccc', fontSize: 16, marginBottom: 8 },
  hintText: { color: '#666', fontSize: 12 },
  inputContainer: { flexDirection: 'row', paddingHorizontal: 20, marginBottom: 15 },
  input: { flex: 1, backgroundColor: '#141d22', color: '#fff', borderRadius: 25, paddingHorizontal: 20, height: 50 },
  sendBtn: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#00d2ff', justifyContent: 'center', alignItems: 'center', marginLeft: 10 },
  sendBtnText: { color: '#000', fontSize: 20, fontWeight: 'bold' },
  bottomBar: { alignItems: 'center', marginBottom: 20 },
  micBtn: { width: 70, height: 70, borderRadius: 35, backgroundColor: '#00d2ff', justifyContent: 'center', alignItems: 'center' },
  micIcon: { fontSize: 30 },
});
