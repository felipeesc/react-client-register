import React from 'react'
import { screen } from '@testing-library/react'
import TelaInicial from './TelaInicial'
import { renderWithRedux } from '../../test/testUtil'

test.skip('should add new posts list', async () => {
  renderWithRedux(<TelaInicial />)
  expect(screen.getByText('Cadastrar política pública')).toBeVisible()
})
