import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Thirty from './event/Thirty/index'
import Nationalday from './event/Nationalday/index'
import Chip from './event/Chip/index'
import Fifty from './event/Fifty/index'
import Ag from './event/Ag/index'
import Im from './event/Im/index'
import { GlobalStyle } from './styled.js'

export default function App() {
	return (
		<>
            <GlobalStyle/>
            <HashRouter>
                <Switch>
                    <Route path="/thirty" component={Thirty} />
                    <Route path="/nationalday" component={Nationalday} />
                    <Route path="/chip" component={Chip} />
                    <Route path="/fifty" component={Fifty} />
                    <Route path="/ag" component={Ag} />
                    <Route path="/im" component={Im} />
                </Switch>
            </HashRouter>
		</>
	)
}
