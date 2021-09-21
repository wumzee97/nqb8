<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" dark color="purple" fixed app>
      <v-list class="pt-5">
        <small class="ml-4 ">Menu</small>
        <v-list-item router exact>
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Dashboard'" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item router exact>
          <v-list-item-action>
            <v-icon>bar_chart</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Charts'" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item router exact>
          <v-list-item-action>
            <v-icon>today</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Calender'" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item router exact>
          <v-list-item-action>
            <v-icon>email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Email'" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item router exact>
          <v-list-item-action>
            <v-icon>person</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Profile'" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item router exact>
          <v-list-item-action>
            <v-icon>dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Widget'" />
          </v-list-item-content>
        </v-list-item>
        <v-divider class="mb-5"></v-divider>
        <small class="ml-4">Features</small>
        <v-list-item router exact>
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Dashboard'" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item router exact>
          <v-list-item-action>
            <v-icon>bar_chart</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Charts'" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item router exact>
          <v-list-item-action>
            <v-icon>today</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Calender'" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item router exact>
          <v-list-item-action>
            <v-icon>email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Email'" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item router exact>
          <v-list-item-action>
            <v-icon>person</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Profile'" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item router exact>
          <v-list-item-action>
            <v-icon>dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Widget'" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app class="white">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
    }
  },
}
</script>
