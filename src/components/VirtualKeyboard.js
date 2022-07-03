import Image from 'next/image';
import React from 'react';

function VirtualKeyboard() {
  return (
    <div className="w-9 h-6">
      <Image
        title="Ferramenta de inserção de texto"
        className="bg-transparent cursor-pointer"
        src="/tia_flat.png"
        alt="Teclado Virtual"
        width={19}
        height={11}
      />
    </div>
  );
}

export default VirtualKeyboard;
