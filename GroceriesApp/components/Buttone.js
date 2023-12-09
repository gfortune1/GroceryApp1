import React from "react";
import { Button } from "native-base";
import Colors from "../colors";


function Buttone({ mt = 0, bg, color, children, onPress }) {
  return (
    <Button
      h={55}
      w="full"
      mt={mt}
      rounded="full"
      bg={bg}
      _text={{ color: color, fontWeight: 'bold', textAlign: 'center' }} // Updated _text prop
      _pressed={{ bg: bg }}
      onPress={onPress}
    >
      {children}
    </Button>
  );

}

export default Buttone;
