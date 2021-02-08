import React from 'react'

import ProgressBar from './ProgressBar'
import { renderWithRedux } from '../test/testUtil'
import operationInProgress from '../ducks/operationInProgress'

describe('Valida o componente ProgressBar', () => {
  it('Deve renderizar o componente com sucesso', async () => {
    const wrapper = renderWithRedux(<ProgressBar />, {
      initialState: {
        operationInProgress: {
          operationInProgress: true,
        },
      },
      reducer: operationInProgress,
    })

    expect(wrapper.getByRole('progressbar')).toBeInTheDocument()
  })
})
