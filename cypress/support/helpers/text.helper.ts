import { CyString } from '../../types-aliases';

class TextHelper {
    PageContainsText(text): CyString {
        return cy.contains(text).should('be.visible')
    }
}

export default TextHelper