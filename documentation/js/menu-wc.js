'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">app-coluna-reta documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-d04d5844cf920c948f0261ff5a77ad175e63a6d82167bcf1ff87ee222c4995355806feafa7e21f8d945323949ecf514b9af5925d5075c84e9ed001c10e835400"' : 'data-target="#xs-controllers-links-module-AppModule-d04d5844cf920c948f0261ff5a77ad175e63a6d82167bcf1ff87ee222c4995355806feafa7e21f8d945323949ecf514b9af5925d5075c84e9ed001c10e835400"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-d04d5844cf920c948f0261ff5a77ad175e63a6d82167bcf1ff87ee222c4995355806feafa7e21f8d945323949ecf514b9af5925d5075c84e9ed001c10e835400"' :
                                            'id="xs-controllers-links-module-AppModule-d04d5844cf920c948f0261ff5a77ad175e63a6d82167bcf1ff87ee222c4995355806feafa7e21f8d945323949ecf514b9af5925d5075c84e9ed001c10e835400"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-d04d5844cf920c948f0261ff5a77ad175e63a6d82167bcf1ff87ee222c4995355806feafa7e21f8d945323949ecf514b9af5925d5075c84e9ed001c10e835400"' : 'data-target="#xs-injectables-links-module-AppModule-d04d5844cf920c948f0261ff5a77ad175e63a6d82167bcf1ff87ee222c4995355806feafa7e21f8d945323949ecf514b9af5925d5075c84e9ed001c10e835400"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d04d5844cf920c948f0261ff5a77ad175e63a6d82167bcf1ff87ee222c4995355806feafa7e21f8d945323949ecf514b9af5925d5075c84e9ed001c10e835400"' :
                                        'id="xs-injectables-links-module-AppModule-d04d5844cf920c948f0261ff5a77ad175e63a6d82167bcf1ff87ee222c4995355806feafa7e21f8d945323949ecf514b9af5925d5075c84e9ed001c10e835400"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-55393848b9a3b10d3d5b8b018202200af6c290aeff6170507c7a94a5d265a8404f216c5cd22bbc2d939b2b2773b48cb1372aa3892d434f63fc6e302c4cfc8b13"' : 'data-target="#xs-controllers-links-module-AuthModule-55393848b9a3b10d3d5b8b018202200af6c290aeff6170507c7a94a5d265a8404f216c5cd22bbc2d939b2b2773b48cb1372aa3892d434f63fc6e302c4cfc8b13"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-55393848b9a3b10d3d5b8b018202200af6c290aeff6170507c7a94a5d265a8404f216c5cd22bbc2d939b2b2773b48cb1372aa3892d434f63fc6e302c4cfc8b13"' :
                                            'id="xs-controllers-links-module-AuthModule-55393848b9a3b10d3d5b8b018202200af6c290aeff6170507c7a94a5d265a8404f216c5cd22bbc2d939b2b2773b48cb1372aa3892d434f63fc6e302c4cfc8b13"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-55393848b9a3b10d3d5b8b018202200af6c290aeff6170507c7a94a5d265a8404f216c5cd22bbc2d939b2b2773b48cb1372aa3892d434f63fc6e302c4cfc8b13"' : 'data-target="#xs-injectables-links-module-AuthModule-55393848b9a3b10d3d5b8b018202200af6c290aeff6170507c7a94a5d265a8404f216c5cd22bbc2d939b2b2773b48cb1372aa3892d434f63fc6e302c4cfc8b13"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-55393848b9a3b10d3d5b8b018202200af6c290aeff6170507c7a94a5d265a8404f216c5cd22bbc2d939b2b2773b48cb1372aa3892d434f63fc6e302c4cfc8b13"' :
                                        'id="xs-injectables-links-module-AuthModule-55393848b9a3b10d3d5b8b018202200af6c290aeff6170507c7a94a5d265a8404f216c5cd22bbc2d939b2b2773b48cb1372aa3892d434f63fc6e302c4cfc8b13"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-b26166f92cfad849b117ab7a0966ae4955fe54c993ba0e2bce18e8660576c78b61e87dfe1d30b6407977f484c8c6f333193368bb31119c8d03443fbbe7bbe7ad"' : 'data-target="#xs-injectables-links-module-PrismaModule-b26166f92cfad849b117ab7a0966ae4955fe54c993ba0e2bce18e8660576c78b61e87dfe1d30b6407977f484c8c6f333193368bb31119c8d03443fbbe7bbe7ad"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-b26166f92cfad849b117ab7a0966ae4955fe54c993ba0e2bce18e8660576c78b61e87dfe1d30b6407977f484c8c6f333193368bb31119c8d03443fbbe7bbe7ad"' :
                                        'id="xs-injectables-links-module-PrismaModule-b26166f92cfad849b117ab7a0966ae4955fe54c993ba0e2bce18e8660576c78b61e87dfe1d30b6407977f484c8c6f333193368bb31119c8d03443fbbe7bbe7ad"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-249c0af1a2b106b65e87248729805a51128368d30e4f2ff0576ad00a1daac67f602f58fea7a1dafbb4e61c59af23f0a9e836f4736f506fef81a53a262a36682b"' : 'data-target="#xs-controllers-links-module-UsersModule-249c0af1a2b106b65e87248729805a51128368d30e4f2ff0576ad00a1daac67f602f58fea7a1dafbb4e61c59af23f0a9e836f4736f506fef81a53a262a36682b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-249c0af1a2b106b65e87248729805a51128368d30e4f2ff0576ad00a1daac67f602f58fea7a1dafbb4e61c59af23f0a9e836f4736f506fef81a53a262a36682b"' :
                                            'id="xs-controllers-links-module-UsersModule-249c0af1a2b106b65e87248729805a51128368d30e4f2ff0576ad00a1daac67f602f58fea7a1dafbb4e61c59af23f0a9e836f4736f506fef81a53a262a36682b"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-249c0af1a2b106b65e87248729805a51128368d30e4f2ff0576ad00a1daac67f602f58fea7a1dafbb4e61c59af23f0a9e836f4736f506fef81a53a262a36682b"' : 'data-target="#xs-injectables-links-module-UsersModule-249c0af1a2b106b65e87248729805a51128368d30e4f2ff0576ad00a1daac67f602f58fea7a1dafbb4e61c59af23f0a9e836f4736f506fef81a53a262a36682b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-249c0af1a2b106b65e87248729805a51128368d30e4f2ff0576ad00a1daac67f602f58fea7a1dafbb4e61c59af23f0a9e836f4736f506fef81a53a262a36682b"' :
                                        'id="xs-injectables-links-module-UsersModule-249c0af1a2b106b65e87248729805a51128368d30e4f2ff0576ad00a1daac67f602f58fea7a1dafbb4e61c59af23f0a9e836f4736f506fef81a53a262a36682b"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});