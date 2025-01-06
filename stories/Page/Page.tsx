import React from "react";
import {
  Link,
  Text,
  Title
} from '../../components/core';
import {
  LogoTitle
} from '../../components';

export const Page = () => {
  return (
    <article>
      <LogoTitle content="Hello, world!"/>
      <Title as="h1" level="01">
        The quick brown fox jumps over the lazy dog
      </Title>
      <Title as="h2" level="02">
        The quick brown fox jumps over the lazy dog
      </Title>
      <Title as="h3" level="03">
        The quick brown fox jumps over the lazy dog
      </Title>
      <Title as="h4" level="04">
        The quick brown fox jumps over the lazy dog
      </Title>
      <Title as="h5" level="05">
        The quick brown fox jumps over the lazy dog
      </Title>
      <Title as="h6" level="06">
        The quick brown fox jumps over the lazy dog
      </Title>
      <Text>
        <Link to="#">
          The quick brown fox jumps over the lazy dog
        </Link>
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis iaculis dictum. Morbi a eleifend dui, vitae mattis justo. Suspendisse porta neque et nunc mollis ultricies. Morbi sapien enim, rhoncus et eleifend eget, gravida eu nulla. Praesent a lectus dictum, ultrices leo eu, ultrices nibh. Mauris vitae aliquet risus, mattis finibus risus. Nunc tincidunt magna vitae cursus volutpat. Donec felis mi, elementum nec erat vitae, convallis euismod dolor. Morbi et sagittis dolor. Nunc suscipit, ex vel vestibulum porta, orci urna varius ipsum, quis accumsan erat dui vitae metus. Donec tincidunt tempus odio quis venenatis. Sed laoreet arcu non viverra gravida. Integer dapibus, eros sed imperdiet vehicula, libero ligula faucibus tellus, ut facilisis augue quam eget metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
      </Text>
      <Text>
        Maecenas vitae ex sollicitudin, sodales ligula sed, interdum metus. Sed non imperdiet velit. Ut ut arcu orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus lorem fermentum pharetra fermentum. Nulla tellus justo, euismod sagittis diam id, ornare laoreet leo. Maecenas nec lectus augue. Aenean feugiat mi vel sollicitudin sollicitudin. 
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean vel magna eget lorem commodo mattis. Curabitur consectetur dolor sed nisi facilisis mattis. Fusce ut efficitur ante. Nulla vitae libero risus. Suspendisse id condimentum mauris, vel cursus augue. Aenean in ligula orci. Mauris nec mauris ac risus condimentum scelerisque. In ut dapibus turpis, id efficitur erat. Morbi id blandit augue. Suspendisse porta mi diam, a euismod sem consequat eget. Morbi euismod eleifend faucibus. 
      </Text>
      <Text isSub>
        Duis ut urna sit amet mauris tristique tempus ut sit amet neque. Etiam interdum lacus vitae nibh vehicula, id viverra lorem rutrum. Pellentesque ac mi nisi. Cras suscipit consectetur ligula, at molestie magna dictum et. Donec nec tristique magna. Duis sit amet accumsan mi, eget condimentum nisi. Duis eleifend mauris non laoreet eleifend. Mauris leo erat, egestas vitae auctor ac, dignissim nec dolor. Vivamus eu ipsum non leo varius dictum. In nisi neque, consequat vitae eros ac, mollis vulputate enim. Aenean elit nisi, posuere sed accumsan sit amet, lobortis ac mauris. 
      </Text>
      <Text isBold>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis iaculis dictum. Morbi a eleifend dui, vitae mattis justo. Suspendisse porta neque et nunc mollis ultricies. Morbi sapien enim, rhoncus et eleifend eget, gravida eu nulla. Praesent a lectus dictum, ultrices leo eu, ultrices nibh. Mauris vitae aliquet risus, mattis finibus risus. Nunc tincidunt magna vitae cursus volutpat. Donec felis mi, elementum nec erat vitae, convallis euismod dolor. Morbi et sagittis dolor. Nunc suscipit, ex vel vestibulum porta, orci urna varius ipsum, quis accumsan erat dui vitae metus. Donec tincidunt tempus odio quis venenatis. Sed laoreet arcu non viverra gravida. Integer dapibus, eros sed imperdiet vehicula, libero ligula faucibus tellus, ut facilisis augue quam eget metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
      </Text>
      <Text isBold isSub>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis iaculis dictum. Morbi a eleifend dui, vitae mattis justo. Suspendisse porta neque et nunc mollis ultricies. Morbi sapien enim, rhoncus et eleifend eget, gravida eu nulla. Praesent a lectus dictum, ultrices leo eu, ultrices nibh. Mauris vitae aliquet risus, mattis finibus risus. Nunc tincidunt magna vitae cursus volutpat. Donec felis mi, elementum nec erat vitae, convallis euismod dolor. Morbi et sagittis dolor. Nunc suscipit, ex vel vestibulum porta, orci urna varius ipsum, quis accumsan erat dui vitae metus. Donec tincidunt tempus odio quis venenatis. Sed laoreet arcu non viverra gravida. Integer dapibus, eros sed imperdiet vehicula, libero ligula faucibus tellus, ut facilisis augue quam eget metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
      </Text>
      <Text isItalics>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis iaculis dictum. Morbi a eleifend dui, vitae mattis justo. Suspendisse porta neque et nunc mollis ultricies. Morbi sapien enim, rhoncus et eleifend eget, gravida eu nulla. Praesent a lectus dictum, ultrices leo eu, ultrices nibh. Mauris vitae aliquet risus, mattis finibus risus. Nunc tincidunt magna vitae cursus volutpat. Donec felis mi, elementum nec erat vitae, convallis euismod dolor. Morbi et sagittis dolor. Nunc suscipit, ex vel vestibulum porta, orci urna varius ipsum, quis accumsan erat dui vitae metus. Donec tincidunt tempus odio quis venenatis. Sed laoreet arcu non viverra gravida. Integer dapibus, eros sed imperdiet vehicula, libero ligula faucibus tellus, ut facilisis augue quam eget metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
      </Text>
      <Text isItalics isSub>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis iaculis dictum. Morbi a eleifend dui, vitae mattis justo. Suspendisse porta neque et nunc mollis ultricies. Morbi sapien enim, rhoncus et eleifend eget, gravida eu nulla. Praesent a lectus dictum, ultrices leo eu, ultrices nibh. Mauris vitae aliquet risus, mattis finibus risus. Nunc tincidunt magna vitae cursus volutpat. Donec felis mi, elementum nec erat vitae, convallis euismod dolor. Morbi et sagittis dolor. Nunc suscipit, ex vel vestibulum porta, orci urna varius ipsum, quis accumsan erat dui vitae metus. Donec tincidunt tempus odio quis venenatis. Sed laoreet arcu non viverra gravida. Integer dapibus, eros sed imperdiet vehicula, libero ligula faucibus tellus, ut facilisis augue quam eget metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
      </Text>
      <Text isBold isItalics>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis iaculis dictum. Morbi a eleifend dui, vitae mattis justo. Suspendisse porta neque et nunc mollis ultricies. Morbi sapien enim, rhoncus et eleifend eget, gravida eu nulla. Praesent a lectus dictum, ultrices leo eu, ultrices nibh. Mauris vitae aliquet risus, mattis finibus risus. Nunc tincidunt magna vitae cursus volutpat. Donec felis mi, elementum nec erat vitae, convallis euismod dolor. Morbi et sagittis dolor. Nunc suscipit, ex vel vestibulum porta, orci urna varius ipsum, quis accumsan erat dui vitae metus. Donec tincidunt tempus odio quis venenatis. Sed laoreet arcu non viverra gravida. Integer dapibus, eros sed imperdiet vehicula, libero ligula faucibus tellus, ut facilisis augue quam eget metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
      </Text>
      <Text isBold isItalics isSub>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis iaculis dictum. Morbi a eleifend dui, vitae mattis justo. Suspendisse porta neque et nunc mollis ultricies. Morbi sapien enim, rhoncus et eleifend eget, gravida eu nulla. Praesent a lectus dictum, ultrices leo eu, ultrices nibh. Mauris vitae aliquet risus, mattis finibus risus. Nunc tincidunt magna vitae cursus volutpat. Donec felis mi, elementum nec erat vitae, convallis euismod dolor. Morbi et sagittis dolor. Nunc suscipit, ex vel vestibulum porta, orci urna varius ipsum, quis accumsan erat dui vitae metus. Donec tincidunt tempus odio quis venenatis. Sed laoreet arcu non viverra gravida. Integer dapibus, eros sed imperdiet vehicula, libero ligula faucibus tellus, ut facilisis augue quam eget metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
      </Text>
      <Text>
        Lorem ipsum dolor sit amet <Text isBold isSpan>consectetur</Text> adipiscing elit.
      </Text>
      <ul className="havok-design-system-unordered-list">
        <li className="havok-design-system-list-item">
          The quick brown fox jumps over the lazy dog
        </li>
        <li className="havok-design-system-list-item">
          The quick brown fox jumps over the lazy dog
        </li>
        <li className="havok-design-system-list-item">
          The quick brown fox jumps over the lazy dog
        </li>
      </ul>
      <ol className="havok-design-system-ordered-list">
        <li className="havok-design-system-list-item">
          The quick brown fox jumps over the lazy dog
        </li>
        <li className="havok-design-system-list-item">
          The quick brown fox jumps over the lazy dog
        </li>
        <li className="havok-design-system-list-item">
          The quick brown fox jumps over the lazy dog
        </li>
      </ol>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean vel magna eget lorem commodo mattis. Curabitur consectetur dolor sed nisi facilisis mattis. Fusce ut efficitur ante. Nulla vitae libero risus. Suspendisse id condimentum mauris, vel cursus augue. Aenean in ligula orci. Mauris nec mauris ac risus condimentum scelerisque. In ut dapibus turpis, id efficitur erat. Morbi id blandit augue. Suspendisse porta mi diam, a euismod sem consequat eget. Morbi euismod eleifend faucibus. 
      </Text>
    </article>
  );
};
