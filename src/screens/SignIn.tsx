import React, { useState } from "react";
import { Heading, VStack, Icon, useTheme } from "native-base";
import Logo from "../assets/logo_primary.svg";
import { Input } from "../components/Input";
import { Envelope, Key } from "phosphor-react-native";
import { Button } from "../components/Button";

export function SignIn() {
  const { colors } = useTheme();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    console.log("name: " + name, "pw: " + password);
  }

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />
      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>
      <Input
        placeholder="E-mail"
        mb={4}
        InputLeftElement={
          <Icon ml={4} as={<Envelope color={colors.gray[300]} />} />
        }
        onChangeText={(text) => setName(text)}
      />
      <Input
        placeholder="Senha"
        mb={8}
        InputLeftElement={<Icon ml={4} as={<Key color={colors.gray[300]} />} />}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Entrar" w="full" onPress={handleSignIn} />
    </VStack>
  );
}
