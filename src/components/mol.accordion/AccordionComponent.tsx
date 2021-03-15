import React, {useState} from 'react';
import {SystemIcons} from '../../constants/theme';
import {Icon, Text} from '../../components';
import {
  Container,
  AccordionHeader,
  AccordionBody,
} from './AccordionComponentStyle';
import {TouchableWithoutFeedback} from 'react-native';

interface AccordionComponentProps {
  title: string;
  children: React.ReactNode;
}

export const AccordionComponent: React.FC<AccordionComponentProps> = ({
  title,
  children,
}) => {
  const [isActive, setActive] = useState<boolean>(false);
  return (
    <Container>
      <TouchableWithoutFeedback onPress={() => setActive(!isActive)}>
        <AccordionHeader>
          <Text preset="bold" style={{marginRight: 8}}>
            {title}
          </Text>
          {isActive ? (
            <Icon source={SystemIcons.chevronUp} width={16} height={16} />
          ) : (
            <Icon source={SystemIcons.chevronDown} width={16} height={16} />
          )}
        </AccordionHeader>
      </TouchableWithoutFeedback>
      {isActive && <AccordionBody>{children}</AccordionBody>}
    </Container>
  );
};
