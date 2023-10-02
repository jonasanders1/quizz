import {useNavigation, NavigationProp} from "@react-navigation/native"

// type for list of routes
type RouteList = {
    Home: undefined,
    Quiz: undefined,
    Result: undefined, 
}

type QuizNavigationProps = NavigationProp<RouteList>

const useOwnNavigation = () => {
    const navigation = useNavigation<QuizNavigationProps>()

    // Function for navigating
    const navigate = (path: keyof RouteList) => {
        navigation.navigate(path)
    }
    // Functions for navigation backwards
    const goBack = () => {
        navigation.goBack()
    }

    return {navigate, goBack}
}

export default useOwnNavigation