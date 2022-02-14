import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
    Table,
    Thead,
    Tr,
    Th,
    Td,
    Tbody,
    TableCaption,
    Tfoot
} from '../index'
export default {
    title: 'Ui-lib/Tables',
    component: Table,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {}
  } as ComponentMeta<typeof Table>;

  export const Striped: ComponentStory<typeof Table> = (args) => {
      return (
        <Table variant='striped'>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
                <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
                </Tr>
            </Tbody>
            <Tfoot>
                <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
                </Tr>
            </Tfoot>
        </Table>
      )
  }

  export const SmallTable: ComponentStory<typeof Table> = (args) => {
    return (
      <Table size='sm'>
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
              <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
              </Tr>
          </Thead>
          <Tbody>
              <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
              </Tr>
          </Tbody>
          <Tfoot>
              <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
              </Tr>
          </Tfoot>
      </Table>
    )
}