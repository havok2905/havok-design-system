import React from "react";
import {
  Box,
  Button,
  ButtonContainer,
  Grid,
  GridRow,
  Header,
  Link,
  LogoTitle,
  Item,
  SimpleList,
  Tag,
  Text,
  TextInput,
  Title,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell
} from '../../components/core';

export const Page = () => {
  return (
    <>
      <Header
        headerTitle={{
          text: 'Hello, world!',
          to: '#'
        }}
        menu={{
          items: [
            {
              label: 'Home',
              to: '#'
            },
            {
              label: 'About',
              to: '#'
            },
            {
              label: 'Contact',
              to: '#'
            }
          ]
        }}
      />  
      <Grid>
        <GridRow>
          <Item columns={12}>
            <LogoTitle content="Hello, world!"/>
            <Title as="h2" level="02">
              The quick brown fox jumps over the lazy dog
            </Title>
            <Tag  keyString="Foo" value="Barrrrr"/>
            <Tag  keyString="Foo" value="Barrrrr"/>
            <Tag  keyString="Foo" value="Barrrrr"/>
            <Text>
              Lorem ipsum <Link to="#">dolor sit amet, consectetur adipiscing elit</Link>. Nunc iaculis iaculis dictum. Morbi a eleifend dui, vitae mattis justo. Suspendisse porta neque et nunc mollis ultricies. Morbi sapien enim, rhoncus et eleifend eget, gravida eu nulla. Praesent a lectus dictum, ultrices leo eu, ultrices nibh. Mauris vitae aliquet risus, mattis finibus risus. Nunc tincidunt magna vitae cursus volutpat. Donec felis mi, elementum nec erat vitae, convallis euismod dolor. Morbi et sagittis dolor. Nunc suscipit, ex vel vestibulum porta, orci urna varius ipsum, quis accumsan erat dui vitae metus. Donec tincidunt tempus odio quis venenatis. Sed laoreet arcu non viverra gravida. Integer dapibus, eros sed imperdiet vehicula, libero ligula faucibus tellus, ut facilisis augue quam eget metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
            </Text>
            <Text>
              Maecenas vitae ex <Text isBold isSpan>sollicitudin</Text>, sodales ligula sed, interdum metus. Sed non imperdiet velit. Ut ut arcu orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus lorem fermentum pharetra fermentum. Nulla tellus justo, euismod sagittis diam id, ornare laoreet leo. Maecenas nec lectus augue. Aenean feugiat mi vel sollicitudin sollicitudin. 
            </Text>
            <Box>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean vel magna eget lorem commodo mattis. Curabitur consectetur dolor sed nisi facilisis mattis. Fusce ut efficitur ante. Nulla vitae libero risus. Suspendisse id condimentum mauris, vel cursus augue. Aenean in ligula orci. Mauris nec mauris ac risus condimentum scelerisque. In ut dapibus turpis, id efficitur erat. Morbi id blandit augue. Suspendisse porta mi diam, a euismod sem consequat eget. Morbi euismod eleifend faucibus. 
              </Text>
            </Box>
            <Box isDarkMode>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean vel magna eget lorem commodo mattis. Curabitur consectetur dolor sed nisi facilisis mattis. Fusce ut efficitur ante. Nulla vitae libero risus. Suspendisse id condimentum mauris, vel cursus augue. Aenean in ligula orci. Mauris nec mauris ac risus condimentum scelerisque. In ut dapibus turpis, id efficitur erat. Morbi id blandit augue. Suspendisse porta mi diam, a euismod sem consequat eget. Morbi euismod eleifend faucibus. 
              </Text>
            </Box>
            <Title as="h3" level="03">
              The quick brown fox jumps over the lazy dog
            </Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean vel magna eget lorem commodo mattis. Curabitur consectetur dolor sed nisi facilisis mattis. Fusce ut efficitur ante. Nulla vitae libero risus. Suspendisse id condimentum mauris, vel cursus augue. Aenean in ligula orci. Mauris nec mauris ac risus condimentum scelerisque. In ut dapibus turpis, id efficitur erat. Morbi id blandit augue. Suspendisse porta mi diam, a euismod sem consequat eget. Morbi euismod eleifend faucibus. 
            </Text>
            <Title as="h4" level="04">
              The quick brown fox jumps over the lazy dog
            </Title>
            <SimpleList items={[
              {
                content: 'The quick brown fox jumps over the lazy dog'
              },
              {
                content: 'The quick brown fox jumps over the lazy dog'
              },
              {
                content: 'The quick brown fox jumps over the lazy dog'
              }
            ]}/>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean vel magna eget lorem commodo mattis. Curabitur consectetur dolor sed nisi facilisis mattis. Fusce ut efficitur ante. Nulla vitae libero risus. Suspendisse id condimentum mauris, vel cursus augue. Aenean in ligula orci. Mauris nec mauris ac risus condimentum scelerisque. In ut dapibus turpis, id efficitur erat. Morbi id blandit augue. Suspendisse porta mi diam, a euismod sem consequat eget. Morbi euismod eleifend faucibus. 
            </Text>
            <SimpleList isBulleted items={[
              {
                content: 'The quick brown fox jumps over the lazy dog'
              },
              {
                content: 'The quick brown fox jumps over the lazy dog'
              },
              {
                content: 'The quick brown fox jumps over the lazy dog'
              }
            ]}/>
            <Title as="h5" level="05">
              The quick brown fox jumps over the lazy dog
            </Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean vel magna eget lorem commodo mattis. Curabitur consectetur dolor sed nisi facilisis mattis. Fusce ut efficitur ante. Nulla vitae libero risus. Suspendisse id condimentum mauris, vel cursus augue. Aenean in ligula orci. Mauris nec mauris ac risus condimentum scelerisque. In ut dapibus turpis, id efficitur erat. Morbi id blandit augue. Suspendisse porta mi diam, a euismod sem consequat eget. Morbi euismod eleifend faucibus. 
            </Text>
          </Item>
        </GridRow>
        <GridRow>
          <Item columns={6}>
            <Box>
              <Title as="h6" level="06">
                The quick brown fox jumps over the lazy dog
              </Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean vel magna eget lorem commodo mattis. Curabitur consectetur dolor sed nisi facilisis mattis. Fusce ut efficitur ante. Nulla vitae libero risus. Suspendisse id condimentum mauris, vel cursus augue. Aenean in ligula orci. Mauris nec mauris ac risus condimentum scelerisque. In ut dapibus turpis, id efficitur erat. Morbi id blandit augue. Suspendisse porta mi diam, a euismod sem consequat eget. Morbi euismod eleifend faucibus. 
              </Text>
            </Box>
          </Item>
          <Item columns={6}>
            <Box>
              <TextInput
                label="Test Input"
                name="test-input"
                placeholder="Hello, world"
              />
              <TextInput
                label="Test Input"
                name="test-input"
                placeholder="Hello, world"
              />
              <ButtonContainer>
                <Button iconType="copy" text="Hello, world!"/>
                <Button buttonType="secondary" text="Hello, world!"/>
                <Button buttonType="destructive" text="Hello, world!"/>
              </ButtonContainer>
            </Box>
          </Item>
        </GridRow>
        <GridRow>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>
                  Foo
                </TableHeader>
                <TableHeader>
                  Bar
                </TableHeader>
                <TableHeader>
                  Baz
                </TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  A
                </TableCell>
                <TableCell>
                  B
                </TableCell>
                <TableCell>
                  C
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  A
                </TableCell>
                <TableCell>
                  B
                </TableCell>
                <TableCell>
                  C
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  A
                </TableCell>
                <TableCell>
                  B
                </TableCell>
                <TableCell>
                  C
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </GridRow>
        <GridRow>
          <Item columns={12}>
            <Box>
              <Title as="h6" level="06">
                The quick brown fox jumps over the lazy dog
              </Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean vel magna eget lorem commodo mattis. Curabitur consectetur dolor sed nisi facilisis mattis. Fusce ut efficitur ante. Nulla vitae libero risus. Suspendisse id condimentum mauris, vel cursus augue. Aenean in ligula orci. Mauris nec mauris ac risus condimentum scelerisque. In ut dapibus turpis, id efficitur erat. Morbi id blandit augue. Suspendisse porta mi diam, a euismod sem consequat eget. Morbi euismod eleifend faucibus. 
              </Text>
              <TextInput
                label="Test Input"
                name="test-input"
                placeholder="Hello, world"
              />
              <TextInput
                label="Test Input"
                name="test-input"
                placeholder="Hello, world"
              />
              <ButtonContainer>
                <Button iconType="copy" text="Hello, world!"/>
                <Button buttonType="secondary" text="Hello, world!"/>
                <Button buttonType="destructive" text="Hello, world!"/>
              </ButtonContainer>
            </Box>
            <Text isItalics isSub>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis iaculis dictum. Morbi a eleifend dui, vitae mattis justo. Suspendisse porta neque et nunc mollis ultricies. Morbi sapien enim, rhoncus et eleifend eget, gravida eu nulla. Praesent a lectus dictum, ultrices leo eu, ultrices nibh. Mauris vitae aliquet risus, mattis finibus risus. Nunc tincidunt magna vitae cursus volutpat. Donec felis mi, elementum nec erat vitae, convallis euismod dolor. Morbi et sagittis dolor. Nunc suscipit, ex vel vestibulum porta, orci urna varius ipsum, quis accumsan erat dui vitae metus. Donec tincidunt tempus odio quis venenatis. Sed laoreet arcu non viverra gravida. Integer dapibus, eros sed imperdiet vehicula, libero ligula faucibus tellus, ut facilisis augue quam eget metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
            </Text>
          </Item>
        </GridRow>
      </Grid>
    </>
  );
};
