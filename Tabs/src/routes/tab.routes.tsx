import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Screen, Navigator} = createBottomTabNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';

export function TabRoutes(){
    return(
        <Navigator>
            <Screen
                name='screenA'
                component={ScreenA}
                options={{
                    tabBarLabel: 'Tela A'
                }}
            />
            <Screen
                name='screenB'
                component={ScreenB}
                options={{
                    tabBarLabel: 'Tela B'
                }}
                
            />
        </Navigator>
    )
}