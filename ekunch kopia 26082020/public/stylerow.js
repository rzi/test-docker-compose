  function idFormatter() {
      return 'Podsumowanie'
  }

  function nameFormatter(data) {
      return data.length
  }

  function priceFormatter(data) {
      var field = this.field
      console.log(field)
      return data.map(function(row) {
          return +row[field]
      }).reduce(function(sum, i) {
          return sum + i
      }, 0)
  }

  function rowStyle(row, index) {


      if (index % 2 === 0) {
          return {
              classes: index / 2
          }
      }
      return {
          css: {
              color: 'blue',
              background: 'lightyellow'

          }
      }
  }

  function rowStyle2(row, index) {


      if (index % 2 === 0) {
          return {
              classes: index / 2
          }
      }
      return {
          css: {
              color: 'blue',
              background: 'lightblue'
          }
      }
  }

  function customSort(sortName, sortOrder, data) {
      var order = sortOrder === 'desc' ? -1 : 1
      data.sort(function(a, b) {
          var aa = +((a[sortName] + '').replace(/[^\d]/g, ''))
          var bb = +((b[sortName] + '').replace(/[^\d]/g, ''))
          if (aa < bb) {
              return order * -1
          }
          if (aa > bb) {
              return order
          }
          return 0
      })
  }

  function headerStyleYellow(column) {
      return {
          id: {
              classes: 'uppercase',
              css: { background: 'yellow' }
          },
          supplier_name: {
              css: { background: 'yellow' }
          },
          menu_no: {
              css: { background: 'yellow' }
          },
          menu_desctription: {
              css: { background: 'yellow' }
          },
          menu_price: {
              css: { background: 'yellow' }
          },
          order: {
              css: { background: 'yellow' }
          },
          Id_sesa_no: {
              css: { background: 'yellow' }
          },
          first_name: {
              css: { background: 'yellow' }
          },
          last_name: {
              css: { background: 'yellow' }
          },
          order_date: {
              css: { background: 'yellow' }
          },
          order_supplier_name: {
              css: { background: 'yellow' }
          },
          order_no: {
              css: { background: 'yellow' }
          },
          order_name: {
              css: { background: 'yellow' }
          },
          order_price: {
              css: { background: 'yellow' }
          },
          founding: {
              css: { background: 'yellow' }
          },
          deduction: {
              css: { background: 'yellow' }
          },
          operate: {
              css: { background: 'yellow' }
          },
          guest_name: {
              css: { background: 'yellow' }
          },
          who_order_sesa: {
              css: { background: 'yellow' }
          },
          data: {
              css: { background: 'yellow' }
          },
          cost_center: {
              css: { background: 'yellow' }
          },
          department: {
              css: { background: 'yellow' }
          },
          supplier: {
              css: { background: 'yellow' }
          },
          'count(`order_no`)': {
              css: { background: 'yellow' }
          },
          comment: {
              css: { background: 'yellow' }
          },



      }[column.field]
  }

  function headerStyleLightskyblue(column) {
      return {
          id: {
              classes: 'uppercase',
              css: { background: 'lightskyblue' }
          },
          Id_sesa_no: {
              css: { background: 'lightskyblue' }
          },
          sesa_no: {
              css: { background: 'lightskyblue' }
          },
          first_name: {
              css: { background: 'lightskyblue' }
          },
          last_name: {
              css: { background: 'lightskyblue' }
          },
          order_date: {
              css: { background: 'lightskyblue' }
          },
          order_supplier_name: {
              css: { background: 'lightskyblue' }
          },
          order_no: {
              css: { background: 'lightskyblue' }
          },
          order_name: {
              css: { background: 'lightskyblue' }
          },
          order_price: {
              css: { background: 'lightskyblue' }
          },
          founding: {
              css: { background: 'lightskyblue' }
          },
          deduction: {
              css: { background: 'lightskyblue' }
          },
          operate: {
              css: { background: 'lightskyblue' }
          },
          guest_name: {
              css: { background: 'lightskyblue' }
          },
          who_order_sesa: {
              css: { background: 'lightskyblue' }
          },
          data: {
              css: { background: 'lightskyblue' }
          },
          cost_center: {
              css: { background: 'lightskyblue' }
          },
          department: {
              css: { background: 'lightskyblue' }
          },
          supplier: {
              css: { background: 'lightskyblue' }
          },
          supplier_name: {
              css: { background: 'lightskyblue' }
          },
          departament: {
              css: { background: 'lightskyblue' }
          },
          menu_no: {
              css: { background: 'lightskyblue' }
          },
          menu_description: {
              css: { background: 'lightskyblue' }
          },
          menu_desctription: {
              css: { background: 'lightskyblue' }
          },
          menu_price: {
              css: { background: 'lightskyblue' }
          },
          person_no: {
              css: { background: 'lightskyblue' }
          },
          user_name: {
              css: { background: 'lightskyblue' }
          },
          password: {
              css: { background: 'lightskyblue' }
          },
          delete1: {
              css: { background: 'lightskyblue' }
          },
          update1: {
              css: { background: 'lightskyblue' }
          },
          id_day: {
              css: { background: 'lightskyblue' }
          },
          comment: {
              css: { background: 'lightskyblue' }
          },







      }[column.field]
  }